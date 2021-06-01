//////////////// 변수 선언

const header = document.querySelector("header"),
    logo = document.getElementById("logo").children[0].children[0],
    iconMenu = document.getElementsByClassName("icon_menu")[0].children[0],
    mainGnbLi = document.getElementById("gnb").children[0].children;





//////////////// 헤더 마우스 이벤트 관련 

function headerMouseenter(event) {
    if (window.innerWidth > 1280) {
        logo.src = "./img/logo.png";
        iconMenu.src = "./img/icon_menu.png";
        //  main_gnb_hover  클래스명 추가
        if (window.scrollY < 50) {
            for (let i = 0; i < mainGnbLi.length; i++) {
                mainGnbLi[i].children[0].className += " main_gnb_hover";
            }
        }
        header.classList.remove("header_leave")
        header.classList.add("header_enter")
    }
}

function headerMouseleave(event) {
    if (window.innerWidth > 1280) {
        if (window.scrollY < 50) {
            logo.src = "./img/logo_on.png";
            iconMenu.src = "./img/icon_menu_main.png";
            // main_gnb_hover  클래스명 지우기
            for (i = 0; i < 6; i++) {
                mainGnbLi[i].children[0].className = mainGnbLi[i].children[0].className.replace(" main_gnb_hover", "");
            }
            // 아래는 헤더 마우스 아웃시 높이 변경 및 배경 투명
            header.classList.remove("header_enter");
            header.classList.add("header_leave");
        } else {
            header.classList.remove("header_enter");
            header.classList.add("header_leave");
        }
    }
}


header.addEventListener("mouseenter", headerMouseenter);
header.addEventListener("mouseleave", headerMouseleave);









//////////////// 메인메뉴 마우스 이벤트 - 서브메뉴 슬라이드다운.

// 2번째 gnb li와 4번째 gnb li에 마우스를 올리면 header 높이가 350px 로 변경. 나가면 header의 높이를 125px 로 변경

// 엔터 할 때
function haveSubMenu() {
    header.classList.remove("header125");
    header.classList.add("header350");
    this.children[0].style.color = '#c67931'
}

function dontHaveSubMenu() {
    header.classList.remove("header350");
    header.classList.add("header125");
    this.children[0].style.color = '#c67931'

}

// 리브 할 때  다시
function gnbHoverRemove() {
    this.children[0].style.removeProperty("color");
    // removerProperty 스타일 속성 삭제

}

for (let i = 0; i < mainGnbLi.length; i++) {
    if (i === 1 || i === 3) {
        mainGnbLi[i].addEventListener('mouseenter', haveSubMenu)
    } else {
        mainGnbLi[i].addEventListener('mouseenter', dontHaveSubMenu)
    }
    mainGnbLi[i].addEventListener('mouseleave', gnbHoverRemove)
}






//////////////// 스크롤 내리게 될 경우 헤더에 마우스 엔터 효과 적용 유지

// function test(event) {
//     if (window.scrollY > 50) {
//         console.log("성공")
//     }
// }
// console.log(window.scrollY); //  scrollY : 50 을 기점으로 메뉴 변화 


function headerScroll(event) {
    if (window.scrollY > 50) {
        if (window.innerWidth > 1280) {
            if (header.classList.contains('scroll_header') !== true) {
                logo.src = "./img/logo.png";
                iconMenu.src = "./img/icon_menu.png";
                header.classList.add("scroll_header");
                logo.classList.add("scroll_logo");
                iconMenu.parentElement.classList.add("scroll_icon_menu");
                for (let i = 0; i < mainGnbLi.length; i++) {
                    mainGnbLi[i].children[0].className += " main_gnb_hover";
                    mainGnbLi[i].children[0].classList.add("scroll_gnb");
                }
            }
        } else {
            if (header.classList.contains('scroll_header') !== true) {
                logo.src = "./img/logo.png";
                iconMenu.src = "./img/icon_menu.png";
                header.classList.add("header_notPC");
            }
        }
    } else {
        if (window.innerWidth > 1280) {
            if (header.classList.contains("header_enter")) {
                header.classList.remove("scroll_header");
                logo.classList.remove("scroll_logo");
                iconMenu.parentElement.classList.remove("scroll_icon_menu");
                for (i = 0; i < mainGnbLi.length; i++) {
                    mainGnbLi[i].children[0].classList.remove("scroll_gnb");
                }
            } else {
                logo.src = "./img/logo_on.png";
                iconMenu.src = "./img/icon_menu_main.png";
                header.classList.remove("scroll_header");
                logo.classList.remove("scroll_logo");
                iconMenu.parentElement.classList.remove("scroll_icon_menu");
                for (i = 0; i < mainGnbLi.length; i++) {
                    mainGnbLi[i].children[0].classList.remove("main_gnb_hover");
                    mainGnbLi[i].children[0].classList.remove("scroll_gnb");
                }
            }
        } else {
            logo.src = "./img/logo_on.png";
            iconMenu.src = "./img/icon_menu_main.png";
            header.classList.remove("header_notPC");
        }
    }
}

// 스크롤y 의 높이를 구해서 이 범위 안이면 이벤트 리스너 실행 한번
// 맨위로 올라가면 이벤트 리스너 실행 한번
window.addEventListener('scroll', headerScroll);








/*
마우스 이동에 대한 좌표를 얻어서 헤더높이와 같으면 클래스 지우지 않고 헤더 높이보다 멀어지면 클래스 지우고 

function mousePosition(e) {
    // var positionX = e.clientX;
    var positionY = e.clientY;
    console.log(positionY)
}

window.addEventListener("mousemove", mousePosition)

이거 계속해서 불러들여서 사용못함 ㅠㅠㅠㅠㅠㅠ
*/