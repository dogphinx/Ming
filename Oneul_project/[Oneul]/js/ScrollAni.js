// Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 270;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function () {
    if (window.innerWidth < 1280) {
        const chef2 = document.querySelector("#Chef2");
        // console.log(chef2);
        chef2.querySelector("img").classList.add("sa-right");
        chef2.querySelector("img").classList.remove("sa-left");
        chef2.querySelector("div").classList.add("sa-left");
        chef2.querySelector("div").classList.remove("sa-right");
    }
    for (const element of saElementList) {
        // console.log(element);
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                element.classList.add('show');
                // console.log(element.getBoundingClientRect().top);
            }
        }
    }

}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

// for...of 문  element 는 saElementList 배열의 값 (for...in은 배열의 index번호)

//innerHeight 는 창 틀을 뺀 내용과 스크롤을 포함한 크기

// element.getBoundingClientRect() : 현재 브라우저 화면을 기준으로 위치 값을 가져옵니다.

// getBoundingClientRect().top : 화면 상단부터 대상element의 처음 위치값

// saTriggerMargin 을 지정해 주어 스크롤을 내리자마자 바로 애니메이션 적용되는게 아니라 조금 더 아래위치로 적용해주어 스크롤 후 빈공간 확보한 후에 나타나게끔 위치 조정

// show 클래스를 주어 변화를 원래대로 고정.

// 사용자가 스크롤을 내리면 'element.getBoundingClientRect().top'이 점점 작아지면서, 해당 요소에 show 클래스를 추가하는 조건이 충족되어 보이게 되는 로직