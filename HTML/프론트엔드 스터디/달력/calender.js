// Date 객체 생성
let date = new Date();
let today = new Date();

const calendar = () => {
    
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();


    // year-month 채우기
    document.querySelector('.today').textContent = ` ${viewYear}년 ${viewMonth + 1}월 `;

    // 지난 달 마지막 Date, 이번 달 마지막 Date
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    // Dates 기본 배열들
    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    // prevDates 계산
    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    //nextDates 계산
    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i)
    }

    // Dates 합치기
    const dates = prevDates.concat(thisDates, nextDates);

    // Dates 정리
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
            ? 'this'
            : 'other';

        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    })



    // Dates 출력
    document.querySelector('.dates').innerHTML = dates.join('');

    //오늘 날짜 표시
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }

}

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    calendar();
}

const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    calendar();
}

const goToday = () => {
    date = new Date();
    calendar();
}
calendar();

const daily = () => {
    // Date 객체 생성
    let date = new Date();
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
    const viewdate = date.getDate();

    // year-month 채우기
    document.querySelector('.d_today').textContent = `${viewYear}년 ${viewMonth + 1}월 ${viewdate}일`;
}

function add() {
    var quest = prompt("오늘의 할일은?");
    document.querySelector('.board').textContent = quest;
}

daily();
