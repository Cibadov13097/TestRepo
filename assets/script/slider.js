const slides = document.querySelectorAll('.slide')

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let slideImg;
var currentSlide = 1;
var targetSlide = 1;
setInterval(nextPic,4000)   

function nextPic() {


    let bicaq;
    

    slides.forEach(slide => {
        if (slide.getAttribute('order') == targetSlide) {
            currentSlide = slide;
            slideImg = slide.firstElementChild;
            
            
          
        }
    });



    currentSlide.style.visibility = "hidden";
    if (targetSlide == 3) {
        targetSlide = 1


    } else {
        targetSlide += 1
    }


    slides.forEach(slide => {
        if (slide.getAttribute('order') == targetSlide) {
            slide.style.visibility = "visible";

            const slideImg = $(slide.firstElementChild)
            const slideIcon = $(slide.firstElementChild.nextElementSibling)
            const slideH3=$(slide.firstElementChild.nextElementSibling.nextElementSibling)
            const slidep=$(slide.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)
            const slidebtn = $(slide.lastElementChild)

            slideIcon.css({
                transform: "translateX(100px)",
                transition: "none",
                opacity:0
            })

            slideH3.css({
                transform: "translateX(100px)",
                transition: "none",
                opacity:0
            })
            slidep.css({
                transform: "translateX(100px)",
                transition: "none",
                opacity:0
            })

            slidebtn.css({
                transform: "translateX(100px)",
                transition: "none",
                opacity:0
            })

            slideImg.css({
                transform: "scale(0.9)",
                transition: "none",
                opacity: 0
            });
            setTimeout(() => {

             
                slideIcon.fadeIn(1);
                slideIcon.css("transition", "transform 1s ease-in-out");
                slideIcon.fadeTo(500, 1);
                slideIcon.css("transform", "translateX(0px)");

                slideH3.fadeIn(1);
                slideH3.css("transition", "transform 1.2s ease-in-out");
                slideH3.fadeTo(500, 1);
                slideH3.css("transform", "translateX(0px)");

                slidep.fadeIn(1);
                slidep.css("transition", "transform 1.3s ease-in-out");
                slidep.fadeTo(500, 1);
                slidep.css("transform", "translateX(0px)");

                
                slidebtn.fadeIn(1);
                slidebtn.css("transition", "transform 1.5s ease-in-out");
                slidebtn.fadeTo(500, 1);
                slidebtn.css("transform", "translateX(0px)");


                slideImg.fadeIn(1);
                slideImg.css("transition", "transform 1s ease-in-out");
                slideImg.fadeTo(500, 1);
                slideImg.css("transform", "scale(1)");
            }, 50);
        }
    });

}

function prevPic() {


    slides.forEach(slide => {
        if (slide.getAttribute('order') == targetSlide) {
            currentSlide = slide;
        }
    });





    currentSlide.style.visibility = "hidden";
    if (targetSlide == 1) {
        targetSlide = 3


    } else {
        targetSlide -= 1
    }

    console.log(targetSlide);
    slides.forEach(slide => {
        if (slide.getAttribute('order') == targetSlide) {
            slide.style.visibility = "visible";

           
            const slideImg = $(slide.firstElementChild)
            const slideIcon = $(slide.firstElementChild.nextElementSibling)
            const slideH3=$(slide.firstElementChild.nextElementSibling.nextElementSibling)
            const slidep=$(slide.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling)
            const slidebtn = $(slide.lastElementChild)

            slideImg.css({
                transform: "scale(0.9)",
                opacity: 0,
                transition: "none",
            });
            slideIcon.css({
                transform: "translateX(100px)",
                transition: "none"
            })

            slideH3.css({
                transform: "translateX(100px)",
                transition: "none",
                opacity:0
            })
            slidep.css({
                transform: "translateX(100px)",
                transition: "none",
                opacity:0
            })

            slidebtn.css({
                transform: "translateX(100px)",
                transition: "none",
                opacity:0
            })
            setTimeout(() => {
                slideIcon.fadeIn(1);
                slideIcon.css("transition", "transform 1s ease-in-out");
                slideIcon.fadeTo(500, 1);
                slideIcon.css("transform", "translateX(0px)");

                slideH3.fadeIn(1);
                slideH3.css("transition", "transform 1.2s ease-in-out");
                slideH3.fadeTo(500, 1);
                slideH3.css("transform", "translateX(0px)");

                slidep.fadeIn(1);
                slidep.css("transition", "transform 1.3s ease-in-out");
                slidep.fadeTo(500, 1);
                slidep.css("transform", "translateX(0px)");

                
                slidebtn.fadeIn(1);
                slidebtn.css("transition", "transform 1.5s ease-in-out");
                slidebtn.fadeTo(500, 1);
                slidebtn.css("transform", "translateX(0px)");

                slideImg.fadeIn(1);
                slideImg.css("transition", "transform 1s ease-in-out");
                slideImg.fadeTo(500, 1);
                slideImg.css("transform", "scale(1)");
                
                
            }, 50);
        }

    });

}

next.addEventListener("click", nextPic);
prev.addEventListener("click", prevPic);