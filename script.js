gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let tl = gsap.timeline()

tl.to("#loader",{
    y:- 900,
    duration:2,
    delay:.5
})
gsap.to('#loader',{
    display:"none",
    delay:1
})
tl.from(".page1-heaidng h1",{
    y:200,
    duration:1,
})

tl.to(".curcle-img",{
    rotation: 720,
    scrollTrigger: {
        trigger: "#page2",
        scroller:"#main",
      start: "0",
      end: "200%",
      scrub: 2, // Smooth scrolling effect
    },
})
tl.to(".star-img",{
    rotation: 720,
    scrollTrigger: {
      trigger: "#page2",
      scroller:"#main",
      start: "0",
      end: "200%",
      scrub: 2, // Smooth scrolling effect
    },
})

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
})

Shery.makeMagnet(".curcle-img, .star-img" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0,
  });

  Shery.textAnimate(".page2-p" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    duration:1,
    ease: "linear",

  });