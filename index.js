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
