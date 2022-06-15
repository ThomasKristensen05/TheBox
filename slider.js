document.addEventListener("DOMContentLoaded", function() {

    var sliderElm = document.querySelector(".slider")
    var slides = sliderElm.querySelectorAll(".slider__slide")
    var nextElm = sliderElm.querySelector(".slider__next")
    var prevElm = sliderElm.querySelector(".slider__prev")
    var slideNumber = 0


    function showSlide(number) {
        slides[number].classList.add("slider__slide--visible")
    }

    function hideSlide () {
        slides.forEach(function(slide) {
            if (slide.classList.contains("slider__slide--visible")) {
                slide.classList.remove("slider__slide--visible")
            }
        })
    }

    function nextSlide() {
        hideSlide()
        slideNumber++
        if (slideNumber >= slides.length) {
            slideNumber = 0
        }
        showSlide(slideNumber)
    }

    function prevSlide() {
        hideSlide()
        slideNumber--
        if (slideNumber < 0) {
            slideNumber = slides.length - 1
        }
        showSlide(slideNumber)
    }




    nextElm.addEventListener("click", nextSlide)
    prevElm.addEventListener("click", prevSlide)

    //show the first slide
    showSlide(slideNumber)
})