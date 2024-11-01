const navbar = document.querySelector("nav");
const navButton = document.querySelector(".navButton");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 400) {
    navbar.style.transition = "all 0.5s";
    navbar.style.backgroundColor = "white";
    navButton.style.transition = "all 0.5s";
    navButton.style.backgroundColor = "green";
  } else {
    navbar.style.transition = "all 0.5s;";
    navbar.style.backgroundColor = "#ffc017";
    navButton.style.transition = "all 0.5s";
    navButton.style.backgroundColor = "#191919";
  }
};
