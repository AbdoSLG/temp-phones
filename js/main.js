// swiper script 

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    loop:true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



// ddeclare input
let inputs=document.querySelectorAll("form input")
let lables=document.querySelectorAll("form label")
let textArea=document.querySelector("textarea")
let textAreaLabel=document.querySelector(".te")


inputs.forEach(input=>{
    input.onclick=function(){
        for (let i = 0; i < lables.length; i++) {
            if(input.getAttribute("class")==lables[i].getAttribute("class")){
                // lables[i].style.transform="translateY(-50px)"
                lables[i].classList.add("transform")
                
            }
        }
    }
})

textArea.onclick=()=>{
    textAreaLabel.style.transform="translateY(-150px)"
}