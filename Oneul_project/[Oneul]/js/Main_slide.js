let slideIndex = 1,
    dotIndex = 1,
    slides = document.getElementsByClassName("slide"),
    dots = document.getElementsByClassName("dot"),
    slideCaption = document.getElementsByClassName("slide-caption"),
    autoButton = document.getElementsByClassName("auto_button")[0];


showSlides(slideIndex);
// 맨처음 로드 되었을 때, 슬라이드(1)을 보여줘라!

function nextSlide(n) {
    showSlides(slideIndex += n);
}
// 화살표로 슬라이드 넘기는 함수. slideIndex 번호를 제어한다.

function currentSlide(n) {
    showSlides(slideIndex = n);
}
// 슬라이드 화면의 버튼부분. 해당 번호로 갈 수 있게 제어.

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    } // slideIndex 번호가 슬라이드 길이보다 길어지면 1로 돌아감.
    if (n < 1) {
        slideIndex = slides.length
    } // slideIndex 번호가 1보다 작아지면 슬라이드 길이 번호로 돌아감.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // i 는 인덱스 숫자. 인덱스는 index[0] 부터 시작.
    // display: none 처리하여 모든 영역이 보이지않게 해준다.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        dots[i].className = dots[i].className.replace(" dot_line", "");
        slideCaption[i].className = slideCaption[i].className.replace(" sl-cp-trnas", "");
    }
    // 이미 active/dot_line 클래스가 추가된 부분을 제거 하는 역할.
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    dots[slideIndex - 1].className += " dot_line";
    slideCaption[slideIndex - 1].className += " sl-cp-trnas";
}
//  [slideIndex -1] 인덱스 번호기 때문에 0부터 시작 하므로 -1 해준다.
// className 특정 엘리먼트의 클래스 속성의 값을 가져오거나 설정할 수 있다.



function autoPlay() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slideCaption[slideIndex - 1].className.replace(" sl-cp-trnas", "");
    }
    slideIndex++;
    // 슬라이드 인덱스가 올라갈때 도트도 바뀌게 반응
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        dots[i].className = dots[i].className.replace(" dot_line", "");
    }
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    slideCaption[slideIndex - 1].className += " sl-cp-trnas";
    dots[slideIndex - 1].className += " active";
    dots[slideIndex - 1].className += " dot_line";

    autoButton.children[0].classList.add("off")
    autoButton.children[1].classList.remove("off")

    autoTime = setTimeout('autoPlay()', 2500);
}

autoPlay();

// 정지(index = 1)를 누르면 재생 활성화(index = 0)
function stopAutoPlay() {
    clearTimeout(autoTime);

    autoButton.children[0].classList.remove("off")
    autoButton.children[1].classList.add("off")
}