"strict";

const humanQuestionMark = document.querySelector(".human-question-mark");
const humanSelection = document.querySelector(".human-select");
const computerSelection = document.querySelector(".computer-select");
const computerQuestionMark = document.querySelector(".computer-question-mark");
const rpsSelect = document.querySelectorAll(".handimage");
let userPick = "";
const rpsPossibilities = ["rock", "paper", "scissors"];
let rpsRandom = 0;
const resultWords = document.querySelector(".modal-result");
const overlay = document.querySelector(".overlay");
const bestOf = document.querySelector(".best-of");
let bestOfSelection = document.querySelectorAll(".rounds");
let cpuPlayerSelect = document.querySelectorAll(".opp");

humanSelection.classList.add("hidden");
computerSelection.classList.add("hidden");

console.log(bestOfSelection);

for (let i = 0; i < rpsSelect.length; i++)
  rpsSelect[i].addEventListener("click", function () {
    humanQuestionMark.classList.add("hidden"); //hide question mark
    humanSelection.src = `rps-${i + 1}.png`; //select proper rps image for player seleciton
    humanSelection.classList.remove("hidden"); //show the selection
    userPick = rpsSelect[i].id; //for game logic

    // Function takes in a string array and returns a random string within the array.
    const computerPlay = function (arr) {
      rpsRandom = Math.trunc(Math.random() * arr.length);

      return arr[rpsRandom];
    };

    // Save the random string from the string array to a variable by calling the function
    let cpuResult = computerPlay(rpsPossibilities);

    computerQuestionMark.classList.add("hidden");
    computerSelection.src = `rps-${rpsRandom + 1}.png`;
    computerSelection.classList.remove("hidden");

    const finalCompare = function (cpu, user) {
      if (cpu === user) {
        return `We have a tie!! Both have chosen ${userPick} please try again.`;
      }
      if (cpu === "scissors" && user === "paper") {
        return `You Lose!! ${cpu} beats ${user} please try again.🤷‍♀️`;
      } else if (cpu === "scissors" && user === "rock") {
        return `You Win!! ${user} beats ${cpu}.😎`;
      }

      if (cpu === "rock" && user === "scissors") {
        return `You Lose!! ${cpu} beats ${user}  please try again.🤷‍♀️`;
      } else if (cpu === "rock" && user === "paper") {
        return `You Win!! ${user} beats ${cpu} .😎`;
      }

      if (cpu === "paper" && user === "rock") {
        return `You Lose!! ${cpu} beats ${user} please try again.🤷‍♀️`;
      } else if (cpu === "paper" && user === "scissors") {
        return `You Win!! ${user} beats ${cpu}.😎`;
      }
    };
    resultWords.classList.remove("hidden");
    overlay.classList.remove("hidden");
    resultWords.textContent = finalCompare(cpuResult, userPick);
    overlay.addEventListener("click", function () {
      resultWords.classList.add("hidden");
      overlay.classList.add("hidden");
      computerQuestionMark.classList.remove("hidden");
      humanQuestionMark.classList.remove("hidden");
      humanSelection.classList.add("hidden");
      computerSelection.classList.add("hidden");
    });
    // console.log(finalCompare(cpuResult, userPick));

    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" ||
        e.key === "Backspace" ||
        !resultWords.classList.contains("hidden")
      ) {
        resultWords.classList.add("hidden");
        overlay.classList.add("hidden");
        computerQuestionMark.classList.remove("hidden");
        humanQuestionMark.classList.remove("hidden");
        humanSelection.classList.add("hidden");
        computerSelection.classList.add("hidden");
      }
      // console.log(e.key);
    });
  });
