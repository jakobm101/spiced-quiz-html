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




const card = document.createElement("article");
card.classList.add("quiz__card");
card.innerHTML = `
          <h2 class="quiz__card__question">What is the meaning of life</h2>
          <button data-js="showAnswer3" class="showAnswer">Show answer</button>
          <h2 class="answer" hidden data-js="answer3">42</h2>
          <article class="quiz__card__tags">
            <button class="quiz__card__tags__tag">Personal</button>
            <button class="quiz__card__tags__tag">Smalltalk</button>
            <button class="quiz__card__tags__tag">Jakob</button>
          </article>
          <button data-js="bookmark3" class="card__bookmarktoggle">
            Bookmark
          </button>
`;
const cardContainer = document.querySelector('[data-js=cardContainer]')
cardContainer.appendChild(card)