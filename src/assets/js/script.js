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

const svgGPath = document.querySelectorAll(".svgM g path");

function randomizeText() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.ceil(Math.random() * 274));
  }

  for (let i = 0; i < svgGPath.length; i++) {
    arr.forEach((n) => {
      svgGPath[n].setAttribute("opacity", Math.floor(Math.random() * 2));
    });
  }
}

setInterval(randomizeText, 300);
