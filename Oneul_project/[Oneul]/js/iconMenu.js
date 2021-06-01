const iconMenuWindow = document.querySelector('.icon_menu_gnb'),
    iconMenuLi = document.querySelector('.icon_menu_gnb').children[2].children[0].children;

// console.log(iconMenuLi);

const iconMenuClose = () => {
    iconMenuWindow.classList.remove("icon_menu_on")
}

const iconMenuOpen = () => {
    iconMenuWindow.classList.add("icon_menu_on")
    if (window.innerWidth < 1025) {
        iconMenuWindow.children[0].children[0].children[0].src = "./img/logo.png";
        iconMenuWindow.children[1].src = "./img/icon_menu_close_black.png";
    } else {
        iconMenuWindow.children[0].children[0].children[0].src = "./img/logo_on.png";
        iconMenuWindow.children[1].src = "./img/icon_menu_close.png";
    }
}

iconMenu.addEventListener("click", iconMenuOpen);
iconMenuWindow.children[0].children[0].addEventListener("click", iconMenuClose);
iconMenuWindow.children[1].addEventListener("click", iconMenuClose);
for (let i = 0; i < 5; i++) {
    iconMenuLi[i].addEventListener("click", iconMenuClose);
}
// iconMenuLi[5] 는 꺼지지 않고 예약창만 뜨게 해야함.