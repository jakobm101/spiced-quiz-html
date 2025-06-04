console.clear();
console.log("⭐️ Welcome to J Town ⭐️");
let numberOfQuestions = 3;
const answers = [];
const showAnswers = [];
const bookmarks = [];

for (let counter = 1; counter <= numberOfQuestions; counter++) {
  answers.push(document.querySelector(`[data-js=answer${counter}]`));
  showAnswers.push(document.querySelector(`[data-js=showAnswer${counter}]`));
  showAnswers[counter - 1].addEventListener("click", () => {
    answers[counter - 1].toggleAttribute("hidden");
  });

  bookmarks.push(document.querySelector(`[data-js=bookmark${counter}]`));
  const currentBookmark = bookmarks[counter - 1];
  currentBookmark.addEventListener("click", () => {
    currentBookmark.classList.toggle("card__bookmarktoggle--active");
  });
}

