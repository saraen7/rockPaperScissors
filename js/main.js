//Set initial scores of both bot and player to 0
var botScore=0,
	playerScore=0;
//When the player clicks on the "rock" button, the player's throw is set to rock.
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
//When the player clicks on the "scissors" button, the player's throw is set to scissors.
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
//When the player clicks on the "paper" button, the player's throw is set to paper.
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	var botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}
//Generates random number for the bot and assigns that number to rock, paper, or scissors.
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
//Checks who Won, displays message, updates score
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("You tied. :|");
		displayThrownMessage("You played <span>" + playersWeapon +"</span>. The bot played <span>" + botsWeapon + "</span>.");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
		displayThrownMessage("You played <span>" + playersWeapon +"</span>. The bot played <span>" + botsWeapon + "</span>.");
	}
	else{
		increasePlayerScore();
		displayThrownMessage("You played <span>" + playersWeapon +"</span>. The bot played <span>" + botsWeapon + "</span>.");
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("You lose. :(");

}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("playerScore").innerHTML=playerScore;
	displayCompleteMessage("You win! :)");

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

function displayThrownMessage(msg){
	document.getElementById("thrownMessage").innerHTML=msg;
}
