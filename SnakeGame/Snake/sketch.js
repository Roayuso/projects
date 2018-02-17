var s;
var a;
var scl = 15;
var speed = 1;


function Apple(){

	this.x = floor(random(width));
	this.y = floor(random(height));

	this.update = function(){
	//while loop that checks if the location of the random x,y coordinate corresponds with any the array entries
		this.x = floor(random(width));
		this.y = floor(random(height));
	}

	this.show = function(){
		fill(255,0,0);
		rect(this.x,this.y,scl,scl);
	}
}

function Snake(){
	this.x = 0;
	this.y = 0;
	this.xv = 1;
	this.yv = 0;
	this.total = 0;
	this.tail = [];


	this.update = function(){

		if (this.total === this.tail.length) 
		{
			for (var i = 0; i < this.tail.length -1; i++) 
			{
				this.tail[i] = this.tail[i+1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xv*scl;
		this.y = this.y + this.yv*scl;
	}

	this.show = function(){
		fill(0,255,0);

		for(var i = 0; i < this.total; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		fill(0,255,0);
		rect(this.x, this.y, scl, scl);
	}

	this.dir = function(x,y){
		//restricting backwards movement.
		if (this.xv === 0 && x !== 0) {this.xv = x; this.yv = 0;}
		if (this.yv === 0 && y !== 0) {this.yv = y; this.xv = 0;}
	}

	this.eat = function(){
		if(((s.x < a.x+scl) && (s.x > a.x-scl)) && ((s.y < a.y+scl) && (s.y > a.y-scl)))
		{
			this.total++;
			return true;
		}else{
			return false;
		}
	}

	this.death = function(){
		for(var i = 0; i < this.tail.length; i++){
			var pos  = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y)
			if (d < 1) {
				this.total = 0;
				this.tail = [];
			}
		}
	}

	this.wrap = function(){
			if (this.x > 585) {
				
				this.x = 0;
			}
			if (this.x < 0) {
				
				this.x = 585;
			}
			if (this.y > 585) {
				
				this.y = 0;
			}
			if (this.y < 0) {
	
				this.y = 585;
			}
	}
	
}

function setup() {
  createCanvas(600,600);
  s = new Snake();
  a = new Apple();
  frameRate(10);

}

function draw() {
	background(51);
	if (s.eat()) // eats apple
		{
			a.update();
		}
	s.death();
	s.wrap();
	a.show();
	s.update();
	s.show();
	
	
	
	

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		s.dir(0, -speed);
	} else if(keyCode === DOWN_ARROW){
		s.dir(0, speed);
	}else if(keyCode === RIGHT_ARROW){
		s.dir(speed, 0);
	}else if(keyCode === LEFT_ARROW){
		s.dir(-speed, 0);
	}
}

