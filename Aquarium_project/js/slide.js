(function () {
    let slideIndex = 1;
    const slides = document.getElementsByClassName("slide");

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "flex";
    }

    function autoPlay() {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "flex";

        autoTime = setTimeout(autoPlay, 2300);
    }


    showSlides(slideIndex);
    // showSlides(2);

    autoPlay();
})();