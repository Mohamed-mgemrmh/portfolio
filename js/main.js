// mobile menu
const menuIcon = document.querySelector(".mobile");
const menuBtnOne = document.querySelector(".mobile .first");
const menuBtnTwo = document.querySelector(".mobile .second");
const menuBtnThree = document.querySelector(".mobile .third");
const mobileMenu = document.querySelector(".down-menu");
const menuLinks = mobileMenu.querySelectorAll(".down-menu-ul .link a");
menuIcon.onclick = () => {
  menuBtnOne.classList.toggle("first-x-class");
  menuBtnTwo.classList.toggle("second-x-class");
  menuBtnThree.classList.toggle("third-x-class");
  mobileMenu.classList.toggle("open");
};
menuLinks.forEach((link) => {
  link.onclick = () => {
    menuBtnOne.classList.toggle("first-x-class");
    menuBtnTwo.classList.toggle("second-x-class");
    menuBtnThree.classList.toggle("third-x-class");
    mobileMenu.classList.toggle("open");
  };
});
// contact menu
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
toggle.onclick = () => {
  menu.classList.toggle("active");
};

// skills section

const skillsBoxes = document.querySelectorAll(".field-boxes .box");

skillsBoxes.forEach((box) => {
  box.onclick = () => {
    skillsBoxes.forEach((unclicked) => {
      unclicked.classList.remove("active");
    });

    box.classList.add("active");
  };
});

const frontend = document.querySelector(".box-1");
const frameWorks = document.querySelector(".box-2");
const tools = document.querySelector(".box-3");
const design = document.querySelector(".box-4");

const firstProgressText = document.querySelector(".text-1");
const firstProgresspercntg = document.querySelector(".persntg-1");
const firstProgressProg = document.querySelector(".prog-1");

const secondProgressText = document.querySelector(".text-2");
const secondProgresspercntg = document.querySelector(".persntg-2");
const secondProgressProg = document.querySelector(".prog-2");

const thirdProgressText = document.querySelector(".text-3");
const thirdProgresspercntg = document.querySelector(".persntg-3");
const thirdProgressProg = document.querySelector(".prog-3");

const fourthProgressText = document.querySelector(".text-4");
const fourthProgresspercntg = document.querySelector(".persntg-4");
const fourthProgressProg = document.querySelector(".prog-4");

frontend.addEventListener("click", () => {
  firstProgressText.innerHTML = "HTML";
  firstProgresspercntg.innerHTML = "97%";
  firstProgressProg.style.width = "97%";

  secondProgressText.innerHTML = "CSS";
  secondProgresspercntg.innerHTML = "93%";
  secondProgressProg.style.width = "93%";

  thirdProgressText.innerHTML = "JavaScript";
  thirdProgresspercntg.innerHTML = "95%";
  thirdProgressProg.style.width = "95%";

  fourthProgressText.innerHTML = "PHP";
  fourthProgresspercntg.innerHTML = "70%";
  fourthProgressProg.style.width = "70%";
});

frameWorks.addEventListener("click", () => {
  firstProgressText.innerHTML = "Bootstrap";
  firstProgresspercntg.innerHTML = "95%";
  firstProgressProg.style.width = "95%";

  secondProgressText.innerHTML = "Tailwind";
  secondProgresspercntg.innerHTML = "88%";
  secondProgressProg.style.width = "88%";

  thirdProgressText.innerHTML = "SASS";
  thirdProgresspercntg.innerHTML = "85%";
  thirdProgressProg.style.width = "85%";

  fourthProgressText.innerHTML = "React";
  fourthProgresspercntg.innerHTML = "90%";
  fourthProgressProg.style.width = "90%";
});

tools.addEventListener("click", () => {
  firstProgressText.innerHTML = "SEO";
  firstProgresspercntg.innerHTML = "90%";
  firstProgressProg.style.width = "90%";

  secondProgressText.innerHTML = "Visual Studio";
  secondProgresspercntg.innerHTML = "85%";
  secondProgressProg.style.width = "85%";

  thirdProgressText.innerHTML = "Git";
  thirdProgresspercntg.innerHTML = "93%";
  thirdProgressProg.style.width = "93%";

  fourthProgressText.innerHTML = "Github";
  fourthProgresspercntg.innerHTML = "97%";
  fourthProgressProg.style.width = "97%";
});

design.addEventListener("click", () => {
  firstProgressText.innerHTML = "Figma";
  firstProgresspercntg.innerHTML = "93%";
  firstProgressProg.style.width = "93%";

  secondProgressText.innerHTML = "Adobe illustrator";
  secondProgresspercntg.innerHTML = "80%";
  secondProgressProg.style.width = "80%";

  thirdProgressText.innerHTML = "Adobe Photoshop";
  thirdProgresspercntg.innerHTML = "90%";
  thirdProgressProg.style.width = "90%";

  fourthProgressText.innerHTML = "Framer Motion";
  fourthProgresspercntg.innerHTML = "85%";
  fourthProgressProg.style.width = "85%";
});

// reviews section
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// contact section

const icon = document.querySelector(".icon");
const path = document.querySelector("path");
const form = document.querySelector(".contact-form");

function addClassOnScroll() {
  const targetRect = path.getBoundingClientRect();

  if (
    targetRect.top <= window.innerHeight &&
    targetRect.bottom >= 0 &&
    !form.contains(document.activeElement) &&
    !path.classList.contains("animate")
  ) {
    icon.classList.add("animate");
    path.classList.add("animate");
    form.classList.add("form-animate");
    setInterval(() => {
      icon.style.display = "none";
    }, 3000);
  }
}

window.addEventListener("scroll", addClassOnScroll);
window.addEventListener("load", addClassOnScroll);
// mouse tracker
console.clear();

const circleElement = document.querySelector(".circle");

const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
const mouseCircle = document.querySelector(".circle .pointer");
document.addEventListener("mousedown", () =>
  mouseCircle.classList.add("active")
);
document.addEventListener("mouseup", () =>
  mouseCircle.classList.remove("active")
);

const speed = 1;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  const rotateTransform = `rotate(${currentAngle}deg)`;
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
  window.requestAnimationFrame(tick);
};

tick();
