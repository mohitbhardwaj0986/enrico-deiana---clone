gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let tl = gsap.timeline();

tl.to("#loader", {
  y: -900,
  duration: 2,
  delay: 0.5,
});
gsap.to("#loader", {
  display: "none",
  delay: 1,
});
tl.from(".page1-heaidng h1", {
  y: 200,
  duration: 1,
});

tl.to(".curcle-img", {
  rotation: 720,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "0",
    end: "200%",
    scrub: 2, // Smooth scrolling effect
  },
});
tl.to(".star-img", {
  rotation: 720,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "0",
    end: "200%",
    scrub: 2, // Smooth scrolling effect
  },
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".curcle-img, .star-img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0,
});

Shery.textAnimate(".page2-p" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  duration: 1,
  ease: "linear",
});

// let bgChange = document.querySelector("#page4")

let page4Img = document.querySelector("#page4 img");
let bgChnager2 = document.querySelector(".bg-change2");
let bgChnager3 = document.querySelector(".bg-change3");
let bgChnager4 = document.querySelector(".bg-change4");
const bgChanger = ()=>{
  page4Img.addEventListener("mouseover", () => {
    gsap.to("body", {
      background:
        "linear-gradient(to right, rgba(141, 219, 141, 0.434), rgba(219, 132, 132, 0.605), rgba(140, 140, 235, 0.53))",
      duration: 1,
    });
  });
  
  page4Img.addEventListener("mouseout", () => {
    gsap.to("body", {
      background: "#1e2125",
      duration: 1,
    });
  });
  
  bgChnager2.addEventListener("mouseover", () => {
    gsap.to("body", {
      background:
   " linear-gradient(to right, rgba(159, 196, 226, 0.485), rgba(174, 204, 207, 0.451), rgba(140, 140, 235, 0.399))",
      duration: 1,
    });
  });
  bgChnager2.addEventListener("mouseout", () => {
    gsap.to("body", {
      background: "#1e2125",
      duration: 1,
    });
  });
  bgChnager3.addEventListener("mouseover", () => {
    gsap.to("body", {
      background:
   "  linear-gradient(to right, rgba(198, 116, 195, 0.622), rgba(110, 219, 229, 0.519), rgba(207, 222, 129, 0.439))",
      duration: 1,
    });
  });
  bgChnager3.addEventListener("mouseout", () => {
    gsap.to("body", {
      background: "#1e2125",
      duration: 1,
    });
  });
  bgChnager4.addEventListener("mouseover", () => {
    gsap.to("body", {
      background:
   "linear-gradient(to right, rgba(93, 89, 229, 0.622), rgba(83, 216, 228, 0.576), rgba(202, 240, 9, 0.508))",
      duration: 1,
    });
  });
  bgChnager4.addEventListener("mouseout", () => {
    gsap.to("body", {
      background: "#1e2125",
      duration: 1,
    });
  });
  
}
bgChanger()