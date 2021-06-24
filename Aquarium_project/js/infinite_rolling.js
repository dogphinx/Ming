(function () {
    const slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        slideCount = slide.length,
        slideWidth = 49,
        slideMargin = 2,
        controlsElem = document.querySelector('.controls'),
        autoStopBtn = document.querySelector('.stop'),
        stopBtnElem = document.querySelector('.stop'),
        playBtnElem = document.querySelector('.play');
    let currentIdx = 0,
        autoID,
        autoState = false;


    function makeClone() {
        for (let i = 0; i < slideCount; i++) {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide);
        }
        for (let i = slideCount - 1; i >= 0; i--) {
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();
        setTimeout(function () {
            slides.classList.add('animated');
        }, 100)
    }

    function updateWidth() {
        const currentSlides = document.querySelectorAll('.slides li'),
            newSlideCount = currentSlides.length,
            newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'vw';
        slides.style.width = newWidth;
    }

    function setInitialPos() {
        let initialTranslateValue = -(slideWidth + slideMargin) * slideCount - (slideWidth / 2);
        slides.style.transform = 'translateX(' + initialTranslateValue + 'vw)';
    }

    function moveSlide(num) {
        slides.style.left = -num * (slideWidth + slideMargin) + 'vw';
        currentIdx = num;
        // console.log(currentIdx, slideCount);

        if (currentIdx === slideCount || currentIdx === -slideCount) {
            setTimeout(function () {
                slides.classList.remove('animated');
                slides.style.left = '0vw';
                currentIdx = 0;
            }, 500);

            setTimeout(function () {
                slides.classList.add('animated');
            }, 600)
        }
    }

    function moveAuto() {
        moveSlide(currentIdx + 1);

        autoID = setTimeout(function () {
            moveAuto();
        }, 1950);
    }

    function moveBtn(e) {
        // console.log(e.target);

        if (e.target.classList.contains('prev')) {
            moveSlide(currentIdx - 1);
        } else if (e.target.classList.contains('next')) {
            moveSlide(currentIdx + 1);
        } else if (e.target.classList.contains('stop')) {
            clearTimeout(autoID);
        }
    }

    function autoBtn(e) {
        if (e.target.classList.contains('stop')) {
            stopBtnElem.classList.add('none');
            playBtnElem.classList.remove('none');
        } else if (e.target.classList.contains('play')) {
            playBtnElem.classList.add('none');
            stopBtnElem.classList.remove('none');
            moveAuto();
        }
    }

    function showCharacter() {
        const characterElem = document.createElement('div');
        const body = document.querySelector('body');
        const ggobugiElem = document.querySelector('ggobugi-grab-object');

        characterElem.classList.add('ggobugi-grab-object');
        characterElem.innerHTML = `
            <div class="character-face"></div>
            <div class="character-hand character-left-hand"></div>
            <div class="character-hand character-right-hand"></div>
        `;

        body.appendChild(characterElem);
    }

    function link(e) {
        if (e.target.classList.contains('index')) {
            location.href = '../index.html';
        } else if (e.target.classList.contains('performance')) {
            location.href = '../html/performance_info.html';
        } else  {
            location.href = '../html/ticket_info.html';
        }
    }

    slides.addEventListener('click', function (e) {
        const newSlideAll = document.querySelectorAll('.slides li')
        // console.log(newSlideAll);

        if (e.target.classList.contains('page')) {
            link(e);
        }

        if (autoState) return;
        // console.log(e.currentTarget);
        showCharacter();
        clearTimeout(autoID);
        stopBtnElem.classList.add('none');
        playBtnElem.classList.remove('none');
        autoState = true;

        for (let i = 0; i < newSlideAll.length; i++) {
            newSlideAll[i].firstElementChild.classList.add('stretch');
        }
    })

    controlsElem.addEventListener('click', function (e) {
        moveBtn(e);
        autoBtn(e);
    });


    makeClone();

    moveAuto();

})();


