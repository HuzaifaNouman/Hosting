const hamburger = document.querySelector("#hamburger");
const navItems = document.querySelector(".nav-items");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

hamburger.addEventListener("click", () => {
  console.log("hello world");
  let visibility = navItems.getAttribute("data-visible");
  if (visibility === "false") {
    navItems.setAttribute("data-visible", true);
    navItems.style.transform = "translate(-5%,50%)";
    hamburger.style.transform = "rotate(360deg)";
    bar1.style.transform = "rotate(45deg) translate(38%, 31%)";
    bar1.style.width = "25px";
    bar3.style.width = "25px";
    bar2.style.display = "none";
    bar3.style.transform = "rotate(-45deg) translate(-1%, 7%)";
  } else if (visibility === "true") {
    navItems.setAttribute("data-visible", false);
    bar1.style.transform = "rotate(360deg) translate(0, 0)";
    bar1.style.width = "15px";
    bar3.style.width = "15px";
    bar2.style.display = "block";
    bar3.style.transform = "rotate(-360deg) translate(0, 0)";
  }
});
// lenis.js code for smooth scrolling
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// gsap code:
let tl = gsap.timeline();

tl.from(".plans", {
  scale: 0.2,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".plans",
    scroller: "body",
    start: "-400% 50%",
    end: "0 200%",
    scrub: 2,
  },
});

tl.from(".hosting1", {
  x: "-100%",
  duration: 1,
  scrollTrigger: {
    trigger: ".hosting1",
    scroller: "body",
    scrub: 4,
    start: "-50% 50%",
    end: "10% 100%",
  },
});
tl.from(".hosting2", {
  x: "-100%",
  duration: 1,
  scrollTrigger: {
    trigger: ".hosting2",
    scroller: "body",
    scrub: 4,
    start: "-50% 50%",
    end: "10% 100%",
  },
});
tl.from(".hosting3", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hosting3",
    scroller: "body",
    scrub: 3,
    start: "-100% 90%",
    end: "200% 100%",
  },
});
tl.from(".hosting4", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".hosting4",
    scroller: "body",
    start: "-100% 90%",
    end: "200% 100%",
    scrub: 3,
  },
});

tl.from(".panel__content", {
  x: "-100%",
  duration: 1,
  scrollTrigger: {
    trigger: ".panel__content",
    scroller: "body",
    scrub: 2,
    start: "-50% 50%",
    end: "10% 100%",
  },
});
tl.from(".customer-review", {
  x: "-50%",
  y: "-50%",
  scale: 0,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".customer-review",
    scroller: "body",
    scrub: 2,
    start: "-50% 50%",
    end: "top 100%",
  },
});
