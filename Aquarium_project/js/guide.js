(function () {
    const guideCon = document.querySelector('.guide-con');
    const guideElem = document.querySelectorAll('.guide')
    const closeElem = document.querySelectorAll('.fa-window-close');
    let lastGuide = false;
    let secondGuide = false;

    function guideCloseAuto() {
        setTimeout(function () {
            guideElem[0].classList.add('none');
            guideElem[1].classList.add('none');
        }, 7000)
    }


    function guideShow2() {
        if (lastGuide) return;
        guideElem[1].classList.remove('none')
        guideCloseAuto()
    }

    guideCon.addEventListener('click', function (e) {
        // console.log(e.currentTarget);
        
        if (e.target === closeElem[0]) {
            guideElem[0].classList.add('none');
        }
        if (e.target === closeElem[1]) {
            guideElem[1].classList.add('none');
        }
    });

    window.addEventListener('scroll', function () {
        let maxScrollValue = document.body.offsetHeight - window.innerHeight;
        const scrollPer = pageYOffset / maxScrollValue;
        // console.log(scrollPer);

        if (scrollPer > 0.8) {
            guideShow2();
            lastGuide = true;
        }
    });

    guideCloseAuto();

})();