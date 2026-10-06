// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// ===============================
// PAGE LOAD ANIMATION
// ===============================

// Headline animation
gsap.from(".hero-title", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out"
});


// Car entrance animation
gsap.from(".visual img", {
    opacity: 0,
    scale: 0.7,
    y: 80,
    duration: 1.3,
    delay: 0.3,
    ease: "power3.out"
});


// Statistics animation
gsap.from(".stat", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6,
    stagger: 0.2,
    ease: "power2.out"
});


// ===============================
// SCROLL ANIMATION
// ===============================

gsap.to(".visual img", {

    y: 350,
    scale: 0.55,
    rotate: 15,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


// Headline scroll animation

gsap.to(".hero-title", {

    y: -120,
    opacity: 0.2,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});