(function () {
    const body = document.querySelector('body'),
        mainBtnElem = document.querySelector('.main-btn'),
        subBtnElem = document.querySelector('.sub-btn');

        
    body.addEventListener('click', function(e) {
        if (e.target === mainBtnElem || e.target === subBtnElem) {
            // 버튼을 누르면 모달창 생성해서 모달창 띄우면서 적용된 수량 띄우기
            // shopping.js 이런식으로 통합하는게 나을듯
        }
    })
})();