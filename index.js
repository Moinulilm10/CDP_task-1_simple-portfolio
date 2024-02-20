// Get the button element
var upButton = document.getElementById("upBtn");
window.onscroll = function () {
  scrollFunction();
};

// Function to handle scroll event
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// for downside of the webpage
var downArrow = document.getElementById("down-arrow");
downArrow.addEventListener("click", bottomFunction);

function bottomFunction() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  document.documentElement.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

// Get the contact button element
var contactButton = document.querySelector(".contact-button");
// Get the contact form element
var contactForm = document.querySelector(".contact-form");

contactButton.addEventListener("click", function () {
  contactForm.style.display = "block";
  contactButton.style.display = "none";
});

// responsive purpose
const hamburger = document.getElementById("openHam");
const navLinks = document.getElementById("navLinks");
const closeHam = document.getElementById("closeHam");

// Toggle navigation links when hamburger menu is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Hide navigation links when close icon is clicked
closeHam.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
