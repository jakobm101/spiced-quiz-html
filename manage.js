console.clear();
console.log("⭐️ Welcome to J Town ⭐️");
let numberOfQuestions = 3;
const answers = [];
const showAnswers = [];
const bookmarks = [];
const cardContainer = document.querySelector("[data-js=cardContainer]");
const creatorContainer = document.querySelector("[data-js=creatorContainer]");

function addListeners(count, quantity = count) {
  for (let counter = count; counter <= quantity; counter++) {
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
}
addListeners(1, numberOfQuestions);

///////////////////////////////////////////////////////
// Form creator
const creatorForm = document.querySelector("[data-js=creatorForm]");
const inputQuestion = document.querySelector("[data-js=inputQuestion]");
const inputAnswer = document.querySelector("[data-js=inputAnswer]");
const inputTags = document.querySelector("[data-js=inputTags]");
const charCountQuestion = document.querySelector('[data-js="charCountQuestion"]')

console.log(charCountQuestion.textContent);


creatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  numberOfQuestions++;
  createCard(inputQuestion.value, inputAnswer.value, inputTags.value);
  addListeners(numberOfQuestions);
  event.target.reset()
});
inputQuestion.addEventListener('input', (event) => {
  charCountQuestion.textContent = `${100 - event.target.value.length} characters left`
  
})

function createCard(
  question = "What is love",
  answer = 'Baby don"t hurt me',
  tags = "no more"
) {
  const card = document.createElement("article");
  const tagSeparator = tags.trim().replace(/\s+/g, " ").split(" ");
  const tagButtons = tagSeparator
    .map((x) => `<button class="quiz__card__tags__tag">${x}</button>`)
    .join();
  card.classList.add("quiz__card");
  card.innerHTML = `
          <h2 class="quiz__card__question">${question}</h2>
          <button data-js="showAnswer${numberOfQuestions}" class="showAnswer">Show answer</button>
          <h2 class="answer" hidden data-js="answer${numberOfQuestions}">${answer}</h2>
          <article class="quiz__card__tags">
${tagButtons}
          </article>
          <button data-js="bookmark${numberOfQuestions}" class="card__bookmarktoggle">
            Bookmark
          </button>
`;
  cardContainer.appendChild(card);
}
// testing String methods for tag separation and cleanup
// const string = " er fold     asdf ";
// const split = string.trim().replace(/\s+/g, " ").split(" ");
// const list = split.map((x) => (x = `<li>${x}</li>`)).join();
// console.log(list);
