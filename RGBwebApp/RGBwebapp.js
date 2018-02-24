var colors = generateRandomColors(6);
var pickedColor = randomColor();
var h1 = document.querySelector("h1");
var header = document.querySelector("h1 span");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
header.textContent = pickedColor + " ";
var squares = document.querySelectorAll(".square");
var difficultyLevel = "hard";

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if (pickedColor === clickedColor) {
			message.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		}else {
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	});
}


resetButton.addEventListener("click", function(){
	reset();
});

easyButton.addEventListener("click", function(){
	changeDifficulty("easy");
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	difficultyLevel = "easy";

});

hardButton.addEventListener("click", function(){
	changeDifficulty("hard");
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	difficultyLevel = "hard";
});

function changeColors(color){
	for(var i = 0 ; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	arr = [];
	for(var i = 0 ; i < num ; i++){
		var color = createColor();
		arr.push(color);
	}
	return arr;
}

function createColor(){
	var randomR = Math.floor(Math.random() * 256);
	var randomG = Math.floor(Math.random() * 256);
	var randomB = Math.floor(Math.random() * 256);
	var sColor = "rgb(" + randomR +", "+ randomG +", "+ randomB+")";
	return sColor;
}

function reset(){
	if (difficultyLevel === "easy") {
		changeDifficulty("easy");
	}else{
		changeDifficulty("hard");
	}

}

function changeDifficulty(difficulty){
	if (difficulty === "easy") {
		colors = generateRandomColors(3);
		pickedColor = randomColor();
		message.textContent = "";
		header.textContent = pickedColor + " ";
		h1.style.background = "steelblue";
		resetButton.textContent = "New Colors"
		for(var i = 0; i < 3; i++){
			squares[i].style.background = colors[i];
		}
		for(var i = 3; i < 6; i++){
			squares[i].style.display = "none";
		}
	}else {
		colors = generateRandomColors(6);
		pickedColor = randomColor();
		message.textContent = "";
		header.textContent = pickedColor + " ";
		h1.style.background = "steelblue";
		resetButton.textContent = "New Colors"
		for(var i = 0; i < squares.length; i++){
			squares[i].style.display = "";
			squares[i].style.background = colors[i];
		}

	}
}