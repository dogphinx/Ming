const init = {
    monList: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월',
        '10월', '11월', '12월'
    ],
    today: new Date(), // 인수없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환
    monForChange: new Date().getMonth(), // getMonth() '월' 값을 반환 (0~11)
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1,
        0
    ), // new Date(year, month, date, hours, minutes, seconds, ms) date는 일을 나타내는데, 값이 없는 경우엔 1일로 처리됩니다. mm에 +1 을해줘서 다음달로 넘기고 date 에 0을 넣어 그전달로 넘기면 그전달 마지막날짜값을 반환한다.
    nextMonth: function () {
        let d = new Date();
        d.setDate(1); // 1일로 세팅해줌. 만약 31일날짜에 nextMonth 를 하게되면 30일까지므로 자동으로 다음달로 변경될 수 있음.
        d.setMonth(++this.monForChange); // 현재보여지는 상태에서 월값을 가져와서 거기서  ++ 처리 한 값을 세팅
        return d;
    },
    prevMonth: function () {
        let d = new Date();
        d.setDate(1);
        d.setMonth(--this.monForChange);
        return d;
    },
    addZero: (num) => (num < 10) ? '0' + num : num, // 10 보다 작으면 0 + 숫자 처리
    activeDTag: null,
};

const $calBody = document.querySelector('.cal-body');
const $btnNext = document.querySelector('.btn-cal.next');
const $btnPrev = document.querySelector('.btn-cal.prev');


/**
 * @param {date} fullDate
 */
function loadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = init.getFirstDay(yy, mm);
    let lastDay = init.getLastDay(yy, mm);
    let markToday; // for marking today date

    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
        markToday = init.today.getDate();
    }


    document.querySelector('.cal-month').textContent = init.monList[mm];
    document.querySelector('.cal-year').textContent = yy + '년';

    let trtd = '';
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
        trtd += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && !startCount && j === firstDay.getDay()) {
                startCount = 1;
            }
            if (!startCount) {
                trtd += '<td>'
            } else {
                let fullDate = yy + '.' + init.addZero(mm + 1) + '.' + init.addZero(countDay + 1);
                trtd += '<td class="day';
                trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
                trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
            }
            trtd += (startCount) ? ++countDay : '';
            if (countDay === lastDay.getDate()) {
                startCount = 0;
            }
            trtd += '</td>';
        }
        trtd += '</tr>';
    }
    $calBody.innerHTML = trtd;
}


loadYYMM(init.today);


$btnNext.addEventListener('click', () => loadYYMM(init.nextMonth()));
$btnPrev.addEventListener('click', () => loadYYMM(init.prevMonth()));

$calBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('day')) {
        if (init.activeDTag) { // 초기 값 null 은 false 이므로 null이 아닐 때, true 라서 실행.
            init.activeDTag.classList.remove('day-active');
            // click 했을 때, 이전에 있던 마커 삭제
        }
        let classToday = document.querySelector(".today");
        if (classToday !== null) {
            classToday.classList.remove('today')
        }
        let day = Number(e.target.textContent); // 해당 클릭한 타겟의 텍스트만 저장.
        e.target.classList.add('day-active'); // 그 타겟에 액티브 클래스 추가.
        init.activeDTag = e.target; // 지금 현재 타겟을 activeDTag에 저장
    }
});

