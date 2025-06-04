console.clear();
console.log("⭐️ Welcome to J Town ⭐️");
const answers = [];
const showAnswers = [];
let numberOfQuestions = 3;

for(let counter = 1; counter <= numberOfQuestions; counter++){
  answers.push(document.querySelector(`[data-js=answer${counter}]`));
  showAnswers.push(document.querySelector(`[data-js=showAnswer${counter}]`));
  // console.log(showAnswers[counter-1]);
  showAnswers[counter - 1].addEventListener("click", () => {
    answers[counter - 1].toggleAttribute("hidden");
  });

}
// answers[0].removeAttribute("hidden");
console.log(answers);
console.log(showAnswers);
