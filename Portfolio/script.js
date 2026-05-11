AOS.init({
  duration: 1000,
  once: true
});

function toggleMode() {
  document.body.classList.toggle("light");
}

const roles = [
  "I am a Web Developer",
  "Improving through consistency and discipline"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

  current = roles[i];

  document.getElementById("typing").textContent =
    current.substring(0, j);

  if (!isDeleting && j < current.length) {

    j++;
    setTimeout(type, 80);

  } else if (isDeleting && j > 0) {

    j--;
    setTimeout(type, 40);

  } else {

    isDeleting = !isDeleting;

    if (!isDeleting) {
      i = (i + 1) % roles.length;
    }

    setTimeout(type, 800);
  }
}

type();