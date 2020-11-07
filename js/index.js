
const pageMove = document.querySelector("#img");
    

    document.querySelector("#homePage").addEventListener("mousemove", (e)=>{
        let y = (window.innerHeight/2 - e.pageY)/40;
        let x = (window.innerWidth/2 - e.pageX)/40;
        pageMove.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`

    });

    window.addEventListener("scroll", ()=>{
        if(window.pageYOffset > 200){
            document.querySelector("#bar").style.cssText = "width: 6vh;"
            
        } else{
            document.querySelector("#bar").style.cssText = "width: 0vh;"
        }
    })