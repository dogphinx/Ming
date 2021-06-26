(function () {
    const body = document.querySelector('body'),
        minusBtn = document.querySelectorAll('.fa-minus-square'),
        plusBtn = document.querySelectorAll('.fa-plus-square');

    let ticket1Value = 0,
        ticket2Value = 0,
        ticket3Value = 0,
        ticket4Value = 0;


    function renewTicketValue(e) {
        // - + 버튼 누르면 수량(ticketValue) 변경 후 innerText.
        // 각각 버튼들을 선택해야하고 각각 구별을 해서 해당하는 변수값을 변경해줘야함.

        // 첫번째 버튼 클릭시
        // 두번째 버튼 클릭시
        if (e.target === minusBtn[0]) {
            ticket1Value += 1;
            e.target.parentNode.children[1].innerText = minusBtn
        }



    }


    body.addEventListener('click', function (e) {
        // renewTicketValue(e);
        console.log(e.target)
    })
})();