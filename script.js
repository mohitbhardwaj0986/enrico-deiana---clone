let tl = gsap.timeline()

tl.to("#loader",{
    y:- 900,
    duration:2,
    delay:.5
})
tl.to('#loader',{
    display:"none",
    delay:2
})
