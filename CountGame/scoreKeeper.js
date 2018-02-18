//Selecting elements
var button1 = document.querySelector("#p1");
var button2 = document.getElementById("p2");
var resetButton = document.querySelector("#rs");
var par = document.querySelector("p");
var input = document.querySelector("input");
var Score1 = document.querySelectorAll("span")[0];
var Score2 = document.querySelectorAll("span")[1];
var gameOver = false;

// oninput function for input element
function updateText(){
	par.textContent = "Playing to: " + input.value
}

//event listeners
button1.addEventListener("click", function(){
	if (!gameOver) 
		{
			input.disabled = true;
			Score1.textContent = String(parseInt(Score1.textContent) +1);
			if (Score1.textContent === input.value) 
				{
					Score1.classList.add("winner");
					gameOver = true;
					//alert("PLAYER 1 WINS!!");
				}
		}
});

button2.addEventListener("click", function(){
	if (!gameOver) 
		{
			input.disabled = true;
			Score2.textContent = String(parseInt(Score2.textContent) +1);
			if (Score2.textContent === input.value) 
				{
					Score2.classList.add("winner");
					gameOver = true;
					//alert("PLAYER 2 WINS!!");
				}
		}
});

resetButton.addEventListener("click", function(){
	input.disabled = false;
	Score1.textContent = "0";
	Score2.textContent = "0";
	Score1.classList.remove("winner");
	Score2.classList.remove("winner");
	gameOver = false;
});