(function () {
    const bodyElem = document.querySelector('body');
    const divElem = document.createElement('div');

    function loading_st() {
        divElem.classList.add('loading');
        divElem.innerHTML = `
        <div class="loading-shape"></div>
        <p>꼬부기가 아쿠아리움으로 오는 중입니다 ~ ♪</p>
        `;
        bodyElem.appendChild(divElem);
    }

    function loading_ed() {
        divElem.classList.add('none');
    }

    loading_st();

    window.onload = loading_ed;

})();