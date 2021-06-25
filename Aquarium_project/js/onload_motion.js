(function () {
    const perspectiveElem = document.querySelector('.perspective');
    let createState = false;

    function deleteHexahedron() {
        if (createState) return;

        const menuMotionElem = document.createElement('div');
        const bodyElem = document.querySelector('body');

        perspectiveElem.remove();
        menuMotionElem.classList.add('menu-motion');
        bodyElem.appendChild(menuMotionElem);

        createState = true;

        // setTimeout(function() {
        //     menuMotionElem.remove();
        // }, 3200)
    } 

    window.addEventListener('animationend', function () {
        deleteHexahedron();
    })

})();