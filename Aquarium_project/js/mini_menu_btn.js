(function () {
    const gnbElem = document.querySelector('.gnb'),
        miniGnbElem = gnbElem.children[0],
        subGnbElem = gnbElem.children[1];
    let aniState = false,
        mouseState = false;

        
    function showSubMenu() {
        miniGnbElem.classList.add('bubble');

        if (!aniState) {
            subGnbElem.classList.remove('none');

            for (let i = 0; i < subGnbElem.children.length; i++) {
                subGnbElem.children[i].classList.remove('reverse');
                subGnbElem.children[i].classList.add('show');
            }

            aniState = true;
        } else {
            for (let i = 0; i < subGnbElem.children.length; i++) {
                subGnbElem.children[i].classList.remove('show');
                subGnbElem.children[i].classList.add('reverse');
            }
            aniState = false;
        }

        setTimeout(function () {
            miniGnbElem.classList.remove('bubble');
        }, 500)
    }

    function menuHover(e) {
        // console.log(e.target)

        if (!mouseState) {
            if (e.target === subGnbElem.children[0].firstElementChild ||e.target === subGnbElem.children[1].firstElementChild ||e.target === subGnbElem.children[2].firstElementChild) {
                e.target.parentElement.style.backgroundImage = 'url(../img/bubble2.png)'
            } else if (e.target === miniGnbElem) {
                e.target.style.backgroundImage = 'url(../img/bubble2.png)'
            }

            mouseState = true;

        } else {
            if (e.target === subGnbElem.children[0].firstElementChild ||e.target === subGnbElem.children[1].firstElementChild ||e.target === subGnbElem.children[2].firstElementChild) {
                e.target.parentElement.style.backgroundImage = 'url(../img/bubble1.png)'
            } else if (e.target === miniGnbElem) {
                e.target.style.backgroundImage = 'url(../img/bubble1.png)'
            }

            mouseState = false;
        }
    }


    gnbElem.addEventListener('click', function (e) {
        if (e.target === subGnbElem || e.target === gnbElem) return;
        showSubMenu();
    });

    gnbElem.addEventListener('mouseover', function (e) {
        menuHover(e)
    });

    gnbElem.addEventListener('mouseout', function (e) {
        menuHover(e)
    });

})();