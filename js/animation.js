gsap.from(".homeInfo div", { 
    duration: 2.5,
    ease: "expo.out",
    opacity:0,
    x: -500 
});
gsap.from(".homeInfo img", { 
    duration: 2.5,
    ease: "expo.out",
    opacity:0,
    x: 500 
})
gsap.from("nav", {
    duration: 2,
    ease: "power4.out",
    opacity:0,
    y: -100
});
gsap.from(".freelance", {
    duration: 2,
    delay: 1,
    opacity:0,
})
let social = gsap.timeline({

    scrollTrigger: {
    trigger: "#social",  
    start: "top bottom", 
    snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 5, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power4.inOut" // the ease of the snap animation ("power3" by default)
      }
    }
});
social.add("start")
.from("#social li:nth-child(1)",{
    
    duration:0.5,
    y:150
}).add("start1")
.from("#social li:nth-child(2)",{
    
    duration:0.5,
    y:150
}).add("start2")
.from("#social li:nth-child(3)",{
    
    duration:0.5,
    y:150
}).add("start3")
.from("#social li:nth-child(4)",{
    
    duration:0.5,
    y:150
}).add("start4")
.from("#social li:nth-child(5)",{
    
    duration:0.5,
    y:150
})


let tl = gsap.timeline({

    scrollTrigger: {
    trigger: "#aboutInfo",  
    start: "top 60%", 
    snap: {
        snapTo: "labels",
        duration: {min: 0.2, max: 3},
        delay: 0.2, 
        ease: "power1.inOut" 
    }
    }
});
tl.addLabel("start")
.from("#aboutInfo", {
    duration:1,
    width: 0
})
.addLabel("end")
.from("#aboutInfo p",{
    duration: 2,
    opacity: 0
})


gsap.from("#info", {
    scrollTrigger:{
        trigger:"#info",
        start:"top 60%",
    },
    duration: 1,
    x: 200,
    opacity: 0
})
gsap.from("#infoImg", {
    scrollTrigger:{
        trigger:"#infoImg",
        start:"top 60%"
    },
    duration: 2,
    opacity: 0
})
gsap.from("#servicesImg", {
    scrollTrigger:{
        trigger:"#servicesImg",
        start:"top 60%"
    },
    duration: 1,
    y: 200,
    opacity: 0
})

gsap.from("#one", {
    scrollTrigger:{
        trigger:"#one",
        start:"top 60%"
    },
    duration: 1.5,
    ease: "power4.out",
    x: -200,
    opacity: 0
})

gsap.from("#two", {
    scrollTrigger:{
        trigger:"#one",
        start:"top 60%"
    },
    duration: 1.5,
    ease: "power4.out",
    opacity: 0
})

gsap.from("#three", {
    scrollTrigger:{
        trigger:"#one",
        start:"top 60%"
    },
    duration: 1.5,
    ease: "power4.out",
    x: 200,
    opacity: 0
})