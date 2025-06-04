console.clear();
const darkMode = document.querySelector("[data-js=darkMode]");
const head = document.head;
const darkCss = document.createElement("link");
darkCss.rel = "stylesheet";
darkCss.href = "darkmode.css";
darkMode.addEventListener("input", () =>
   darkMode.checked ? head.appendChild(darkCss) : head.removeChild(darkCss)
);

