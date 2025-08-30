document.addEventListener("DOMContentLoaded", (event) => {
  // const canvas = document.createElement("canvas");
  // const ctx = canvas.getContext("2d");
  // ctx.font = "6rem Poppins"; // needs to be determined by the viewport
  // const metrics = ctx.measureText("H");

  // const ascender = metrics.actualBoundingBoxAscent;
  // const xHeight = ctx.measureText("x").actualBoundingBoxAscent;
  // console.log("Ascender:", ascender, "x-Height:", xHeight);
  // const letters = gsap.utils.toArray(".hero-text > span")
  // letters.forEach(letter => letter.style.height = `${ascender + xHeight}px`);

  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrambleTextPlugin) 

  let tl = gsap.timeline();
  tl.from(".Ha", {
    x: "-100%"
  })
  tl.from(".H", {
    rotationX: 180,
    duration: 1.2,
    ease: "power2.out"
  })
  tl.from(".Hap", {
    y: "-100%",
    rotateX: -720,
    duration: 1
  }, "<")
  tl.from(".Happ", {
    y: "-100%",
    rotateX: -540,
    duration: 1
  }, "<")

  tl.from(".Happy", {
    scale: 0.3,
    rotateY: -720,
    ease: "power2.out",
    duration: 2
  }, "<")

  tl.from(".Happy23", {
    textContent: "0",
    snap: { textContent: 1 },
    duration: 2
  })

  tl.from(".Happy23rd", {
    opacity: 0,
    duration: 1
  })

  tl.from(".Birthday", {
    autoAlpha: 0,
    x: "-800%",
    duration: 0.2,
  })
  tl.from(".Birthda", {
    autoAlpha: 0,
    x: "-700%",
    duration: 0.2,
  })
  tl.from(".Birthd", {
    autoAlpha: 0,
    x: "-700%",
    duration: 0.2,
  })
  tl.from(".Birth", {
    autoAlpha: 0,
    x: "-700%",
    duration: 0.2,
  })
  tl.from(".Birt", {
    autoAlpha: 0,
    x: "-700%",
    duration: 0.2
  })
  tl.from(".Bir", {
    autoAlpha: 0,
    x: "-700%",
    duration: 0.2
  })
  tl.from(".Bi", {
    autoAlpha: 0,
    x: "-700%",
    duration: 0.2
  })
  tl.from(".B", {
    autoAlpha: 0,
    x: "-700%",
    duration: 0.2
  })
  tl.to(".Maceon", {
    duration: 1,
    scrambleText: "Baba!"
  })
  tl.from(".⚽", {
    autoAlpha: 0
  })
  tl.from(".button-container", {
    autoAlpha: 0
  }, "<+2")

  tl.call(() => {
    tl.to(".⚽", { rotate: 360, repeat: -1, ease: "none", duration: 4 })
  })

  const button = document.querySelector(".button");
  console.log(button);
  button.addEventListener("click", function() {
    console.log("hello");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  })

})