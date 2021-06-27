(function () {
    const perspectiveElem = document.querySelector('.perspective');
    let createState = false;

    function deleteHexahedron() {
        const menuMotionElem = document.createElement('div'),
            menuMotionBackElem = document.createElement('div'),
            bodyElem = document.querySelector('body'),
            gnbElem = document.querySelector('.gnb');

        if (createState) return;

        perspectiveElem.remove();
        menuMotionElem.classList.add('menu-motion');
        menuMotionBackElem.classList.add('menu-motion-back');
        bodyElem.appendChild(menuMotionBackElem);
        bodyElem.appendChild(menuMotionElem);

        createState = true;

        setTimeout(function () {
            menuMotionBackElem.remove();
            menuMotionElem.remove();
            gnbElem.classList.remove('hidden');
        }, 3100)
    }

    window.addEventListener('animationend', function () {
        deleteHexahedron();
    })

})();