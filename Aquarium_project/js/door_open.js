(function() {
    const leftDoorElem = document.querySelector('.left-door');
    const rightDoorElem = document.querySelector('.right-door');
    const doorWallElem = document.querySelector('.wall-content-c');

    doorWallElem.addEventListener('click', function(e) {
        if (e.target === leftDoorElem || rightDoorElem) {
            leftDoorElem.classList.add('left-door-open');
            rightDoorElem.classList.add('right-door-open');
        }
    })

})();

function link() {
    setTimeout(function() {
        location.href = 'html/main.html';
    }, 800);
}
