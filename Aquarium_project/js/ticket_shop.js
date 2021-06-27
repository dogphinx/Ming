(function () {
    const body = document.querySelector('body'),
        minusBtn = document.querySelectorAll('.fa-minus-square'),
        plusBtn = document.querySelectorAll('.fa-plus-square'),
        ticketSumElem = document.querySelectorAll('.ticket-sum'),
        ticketElem = document.querySelectorAll('.ticket'),
        simpleTicketElem = document.querySelectorAll('.simple-ticket-num'),
        totalSumElem = document.querySelector('.sum').firstElementChild.firstElementChild,
        mainBtnElem = document.querySelector('.main-btn'),
        subBtnElem = document.querySelector('.sub-btn'),
        modalElem = document.querySelector('.modal'),
        modalContentElem = modalElem.lastElementChild,
        closeModalBtn = document.querySelector('.fa-times'),
        ticketName = document.createElement('div');

    let ticketValue = new Array();
    ticketValue[0] = 0;
    ticketValue[1] = 0;
    ticketValue[2] = 0;
    ticketValue[3] = 0;

    let ticketPrice = new Array();
    ticketPrice[0] = 20000;
    ticketPrice[1] = 50000;
    ticketPrice[2] = 35000;
    ticketPrice[3] = 40000;

    let ticketSum = new Array();
    ticketSum[0] = 0;
    ticketSum[1] = 0;
    ticketSum[2] = 0;
    ticketSum[3] = 0;

    let totalTicketPrice;



    function renewTicketValue(e) {

        // 플러스 버튼
        for (let i = 0; i < plusBtn.length; i++) {
            if (e.target === plusBtn[i]) {
                ticketValue[i] += 1;
                e.target.parentNode.children[1].innerText = ticketValue[i];
            }

            simpleTicketElem[i].lastElementChild.firstElementChild.innerText = ticketValue[i];

            ticketSum[i] = ticketPrice[i] * ticketValue[i]
            ticketSumElem[i].innerText = ticketSum[i].toLocaleString();

        }

        // 마이너스 버튼
        for (let i = 0; i < minusBtn.length; i++) {
            if (e.target === minusBtn[i]) {

                ticketValue[i] -= 1;
                if (ticketValue[i] < 0) {
                    ticketValue[i] = 0;
                }
                e.target.parentNode.children[1].innerText = ticketValue[i];
            }

            simpleTicketElem[i].lastElementChild.firstElementChild.innerText = ticketValue[i];

            ticketSum[i] = ticketPrice[i] * ticketValue[i]
            ticketSumElem[i].innerText = ticketSum[i].toLocaleString();
        }

        totalTicketPrice = ticketSum[0] + ticketSum[1] + ticketSum[2] + ticketSum[3];
        totalSumElem.innerText = totalTicketPrice.toLocaleString();
    }

    function modal(e) {
        if (e.target === mainBtnElem || e.target === subBtnElem) {
            modalElem.classList.remove('hidden');

            if (ticketValue[0] === 0 && ticketValue[1] === 0 && ticketValue[2] === 0 && ticketValue[3] === 0) {

                modalContentElem.children[1].classList.add('hidden');

                ticketName.classList.add('nothing');
                ticketName.innerText = '선택된 것이 없습니다.';
                modalContentElem.lastElementChild.appendChild(ticketName);
            } else {
                // ticketValue 가 0이 아닌애들만 추가

                for (let i = 0; i < ticketValue.length; i++) {
                    if (ticketValue[i] !== 0) {
                        ticketName.innerHTML += `
                            <p>${ticketElem[i].children[1].textContent}</p>
                            <span>수량 : &nbsp;${ticketValue[i]} 개</span>
                        `;
                    }
                }
                modalContentElem.lastElementChild.appendChild(ticketName);

            }
        }
    }

    function closeModal(e) {
        if (e.target === closeModalBtn) {
            modalElem.classList.add('hidden');
            modalContentElem.children[1].classList.remove('hidden');
            
            ticketName.innerHTML = ``;
            ticketName.classList.remove('nothing');
            modalContentElem.removeChild(ticketName);
        };
        
    }


    body.addEventListener('click', function (e) {
        renewTicketValue(e);
        modal(e);
        closeModal(e);
    })

})();