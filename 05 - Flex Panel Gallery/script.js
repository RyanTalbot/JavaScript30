// Grabbing all panels
const panels = document.querySelectorAll(".panel");

// Toggles class open
function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

// Applies open-active to whichever property includes flex
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

// When someone clicks panel, toggleOpen will run
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
// When click has finished and opened, toggleActive will run
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
