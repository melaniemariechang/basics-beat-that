var diceRoll = function () {
  var randomDiceRoll = Math.ceil(Math.random() * 6);
  return randomDiceRoll;
};
var concatenate2Numbers = function (num1, num2) {
  return Number(String(num1) + String(num2));
};
var userNames = [];
var gameMode = "input usernames";
var diceRolls1 = [];
var diceRolls2 = [];
var number1 = "";
var number2 = "";
var noOfDice = "";

var main = function (input) {
  if (gameMode == "input usernames") {
    userNames = input.split(` `);
    myOutputValue = `🎲 <b>Welcome ${userNames[0]} & ${userNames[1]}.</b> 🎲 <br> <br> Please start the game by inputting the number of dice.`;
    gameMode = "choose no of dice";
  } else if (gameMode == "choose no of dice") {
    if (input > 0) {
      noOfDice = input;
      gameMode = "player 1 plays beat that!";
      myOutputValue = `🎲 <b>Welcome ${userNames[0]} & ${userNames[1]}.</b> 🎲 <br> <br> You chose to play with ${noOfDice} dices. <br> <br> It is now ${userNames[0]}'s turn.`;
      gameMode = "player 1 plays beat that!";
    } else {
      myOutputValue = `🎲 <b>Welcome ${userNames[0]} & ${userNames[1]}.</b> 🎲 <br> <br> Please enter a valid number.`;
    }
  } else if (gameMode == "player 1 plays beat that!") {
    var counter = 0;
    while (counter < noOfDice) {
      diceRolls1.push(diceRoll());
      counter += 1;
    }
    myOutputValue = `🎲 <b>${userNames[0]}</b> 🎲 <br> <br> You rolled <br> <br> Dice 1: ${diceRolls1[0]} <br> <br> Dice 2: ${diceRolls1[1]} <br> <br> Please choose the order of the dice by entering '1' or '2'.`;
    gameMode = "player 1 chooses order";
  } else if (gameMode == "player 1 chooses order") {
    if (input == "1") {
      number1 = concatenate2Numbers(diceRolls1[0], diceRolls1[1]);
      myOutputValue = `🎲 <b>${userNames[0]}</b> 🎲 <br> <br> You chose Dice 1 first. Your number is ${number1}. <br> <br> It is now ${userNames[1]}'s turn.`;
      gameMode = "player 2 plays beat that!";
    } else if (input == "2") {
      number1 = concatenate2Numbers(diceRolls1[1], diceRolls1[0]);
      myOutputValue = `🎲 <b>${userNames[0]}</b> 🎲 <br> <br> You chose Dice 2 first. Your number is ${number1}. <br> <br> It is now ${userNames[1]}'s turn.`;
      gameMode = "player 2 plays beat that!";
    } else {
      gameMode == "player 1 plays beat that!";
    }
  } else if (gameMode == "player 2 plays beat that!") {
    var counter = 0;
    while (counter < noOfDice) {
      diceRolls2.push(diceRoll());
      counter += 1;
    }
    myOutputValue = `🎲 <b>${userNames[1]}</b> 🎲 <br> <br> You rolled <br> <br> Dice 1: ${diceRolls2[0]} <br> <br> Dice 2: ${diceRolls2[1]} <br> <br> Please choose the order of the dice by entering '1' or '2'.`;
    gameMode = "player 2 chooses order";
  } else if (gameMode == "player 2 chooses order") {
    if (input == "1") {
      number2 = concatenate2Numbers(diceRolls2[0], diceRolls2[1]);
      myOutputValue = `🎲 <b>${userNames[1]}</b> 🎲 <br> <br> You chose Dice 1 first. <br> <br> Your number is ${number2}. <br> <br> Click to reveal the winner!`;
      gameMode = "reveal winner";
    } else if (input == "2") {
      number2 = concatenate2Numbers(diceRolls2[1], diceRolls2[0]);
      myOutputValue = `🎲 <b>${userNames[1]}</b> 🎲 <br> <br> You chose Dice 2 first. <br> <br> Your number is ${number2}. <br> <br> Click to reveal the winner!`;
      gameMode = "reveal winner";
    } else {
      gameMode == "player 2 plays beat that!";
    }
  } else if (gameMode == "reveal winner") {
    if (number1 > number2) {
      myOutputValue = `${userNames[0]}: ${number1} <br> <br> ${userNames[1]}: ${number2} <br> <br> 🎲 <b>Congratulations ${userNames[0]}! You win!</b> 🎲 <br> <br> Click to play again!`;
    } else if (number1 < number2) {
      myOutputValue = `${userNames[0]}: ${number1} <br> <br> ${userNames[1]}: ${number2} <br> <br> 🎲 <b>Congratulations ${userNames[1]}! You win!</b> 🎲 <br> <br> Click to play again!`;
    } else if (number1 == number2) {
      myOutputValue = `${userNames[0]}: ${number1} <br> <br> ${userNames[1]}: ${number2} <br> <br> 🎲 <b>${userNames[0]} & ${userNames[1]}, it's a draw!</b> 🎲 <br> <br> Click to play again!`;
    }
    gameMode = "player 1 plays beat that!";
  }
  return myOutputValue;
};
