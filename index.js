console.clear();
console.log("⭐️ Welcome to J Town ⭐️");
let numberOfQuestions = 3;
const answers = [];
const showAnswers = [];
const bookmark = document.querySelector('[data-js=bookmark]')
console.log(bookmark);


for(let counter = 1; counter <= numberOfQuestions; counter++){
  answers.push(document.querySelector(`[data-js=answer${counter}]`));
  showAnswers.push(document.querySelector(`[data-js=showAnswer${counter}]`));
  showAnswers[counter - 1].addEventListener("click", () => {
    answers[counter - 1].toggleAttribute("hidden");
  });

}


