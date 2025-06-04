console.clear();
const darkMode = document.querySelector("[data-js=darkMode]");
// console.log(darkMode);
const head = document.head;
const darkCss = `<link rel="stylesheet" href="darkmode.css">`;

 head.innerHTML += darkCss;
console.log(head);
