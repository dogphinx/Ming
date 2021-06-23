(function () {
    const leftDoorElem = document.querySelector('.left-door'),
        rightDoorElem = document.querySelector('.right-door'),
        houseElem = document.querySelector('.house'),
        wallRightDoor = document.querySelectorAll('.wall-right-img')[1].firstElementChild,
        wallLeftDoor = document.querySelectorAll('.wall-left-img')[1].firstElementChild;

    houseElem.addEventListener('click', function (e) {
        
        if (e.target === leftDoorElem || e.target === rightDoorElem) {
            leftDoorElem.classList.add('left-door-open');
            rightDoorElem.classList.add('right-door-open');

            console.log(1)
            setTimeout(function () {
                location.href = './html/whole_info.html';
            }, 800)

        } else if (e.target === wallLeftDoor) {
            wallLeftDoor.classList.add('door-open');

            setTimeout(function () {
                location.href = './html/performance_info.html';
            }, 500);

        } else if (e.target === wallRightDoor) {
            // console.log(wallRightDoor, wallLeftDoor)
            wallRightDoor.classList.add('door-open');

            setTimeout(function () {
                location.href = './html/ticket_info.html';
            }, 500);

        }
    });

})();