// Jay Shree Ram

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var v1 = gsap.timeline();

v1.to("#page1",{
    y : "100vh",
    duration : 0,
    scale : 0.6,
})

v1.to("#page1",{
    y:'10vh',
    duration : 1,
    delay : 1,
})

v1.to("#page1",{
    y : "0vh",
    rotate : -720,
    scale : 1,
    duration : 1.4,
    scrub : 4
})

