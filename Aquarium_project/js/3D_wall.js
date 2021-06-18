(function () {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = {
        x: 0,
        y: 0
    };
    let maxScrollValue;
    const characterElem = document.querySelector('.character');
    let xPos = 40;


    // 객체 추가
    characterElem.scrollState = false;
    characterElem.lastScrollTop = 0;
    characterElem.direction;
    characterElem.runningState = false;
    characterElem.rafId;
    characterElem.style.left = xPos + '%';
    characterElem.speed = 1;
    characterElem.rafId;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    function characterRunning() {
        // console.log(characterElem.lastScrollTop)
        // console.log(pageYOffset)

        clearTimeout(characterElem.scrollState);

        if (!characterElem.scrollState) {
            characterElem.classList.add('running');
        }

        characterElem.scrollState = setTimeout(function () {
            characterElem.scrollState = false;
            characterElem.classList.remove('running');
        }, 100);

        if (characterElem.lastScrollTop > pageYOffset) {
            characterElem.setAttribute('data-direction', 'backward')
        } else {
            characterElem.setAttribute('data-direction', 'forward')
        }

        characterElem.lastScrollTop = pageYOffset;
    }

    function run() {
        if (characterElem.direction === 'left') {
            xPos -= characterElem.speed;
        } else if (characterElem.direction === 'right') {
            xPos += characterElem.speed;
        }

        if (xPos < 2) {
            xPos = 2;
        }

        if (xPos > 87) {
            xPos = 87;
        }

        characterElem.style.left = xPos + '%';

        characterElem.rafId = requestAnimationFrame(function () {
            run();
        });
    }

    window.addEventListener('keydown', function (e) {
        if (characterElem.runningState) return;

        if (e.key === 'ArrowLeft') {
            // 왼쪽
            characterElem.direction = 'left'
            characterElem.setAttribute('data-direction', 'left');
            characterElem.classList.add('running');
            run()
            characterElem.runningState = true;
        } else if (e.key === 'ArrowRight') {
            // 오른쪽
            characterElem.direction = 'right'
            characterElem.setAttribute('data-direction', 'right');
            characterElem.classList.add('running');
            run();
            characterElem.runningState = true;
        }
    });

    window.addEventListener('keyup', function (e) {
        characterElem.classList.remove('running');
        cancelAnimationFrame(characterElem.rafId);
        // console.log(characterElem.runningState);
        characterElem.runningState = false;
    });

    window.addEventListener('scroll', function () {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
        barElem.style.width = scrollPer * 100 + '%';

        characterRunning()
    });

    window.addEventListener('mousemove', function (e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2; +
        'deg)';
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 8) + 'deg) rotateY(' + (mousePos.x * 8) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);

    resizeHandler();


})();