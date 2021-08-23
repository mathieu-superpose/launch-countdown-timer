const getCells = (timeperiod) => {
	return {
		behind: {
			cell: document.querySelector(`.${timeperiod}__display__behind__container`),
			content: document.querySelector(`.${timeperiod}__display__behind__container__number`)
		},
		top: {
			cell: document.querySelector(`.${timeperiod}__display__top__container`),
			content: document.querySelector(`.${timeperiod}__display__top__container__number`),
			rotation: 0
		},
		bottom: {
			cell: document.querySelector(`.${timeperiod}__display__bottom__container`),
			content: document.querySelector(`.${timeperiod}__display__bottom__container__number`)
		},
		middle: {
			cell: document.querySelector(`.${timeperiod}__display__middle__container`),
			content: document.querySelector(`.${timeperiod}__display__middle__container__number`),
			rotation: 90
		}
	}
}

const test = getCells("test");


const days = document.querySelector('.days__count');
const hours = document.querySelector('.hours__count');
const minutes = document.querySelector('.minutes__count');
const seconds = document.querySelector('.seconds__count'); 

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const objective = Date.now() + 14 * DAY;

let counter = 0;

const turn = (timeperiod) => {
	counter += 1;

	timeperiod.behind.content.innerHTML = counter;
	timeperiod.middle.content.innerHTML = counter;

	timeperiod.top.cell.style.transform = "rotateX(90deg)";
	timeperiod.middle.cell.style.transform = "rotateX(0deg)";

	setTimeout(() => {
		timeperiod.top.content.innerHTML = counter;
		timeperiod.bottom.content.innerHTML = counter;

		timeperiod.top.cell.style.visibility = "hidden";
		timeperiod.middle.cell.style.visibility = "hidden";

		timeperiod.top.cell.style.transition = "all 0 ease 0";
		timeperiod.middle.cell.style.transition = "all 0 ease 0";

		timeperiod.top.cell.style.transform = "rotateX(0deg)";
		timeperiod.middle.cell.style.transform = "rotateX(90deg)";
	}, 850);

		timeperiod.top.cell.style.transition = "transform ease-in .4s";
		timeperiod.middle.cell.style.transition = "transform .4s ease-out .45s";

		timeperiod.top.cell.style.visibility = "visible";
		timeperiod.middle.cell.style.visibility = "visible";

};

// const countdown = () => {
// 	const remaining = objective - Date.now();
// 	let remSECONDS = Math.floor((remaining%MINUTE)/SECOND);
// 	let prevSECONDS = remSECONDS + 1;

// 	console.log(`turn ${prevSECONDS} to ${remSECONDS}`)
  
// 	setTimeout(countdown, 250);
// }

// TO BE DELETED setInterval(() => console.log((Date.now()%MINUTE)/SECOND), 250);

// const showCountdown = () => {
// 	const remaining = objective - Date.now();
// 	let remDAYS = Math.floor(remaining/DAY) > 9 ? "" + Math.floor(remaining/DAY) : "0" + Math.floor(remaining/DAY);
// 	let remHOURS = Math.floor((remaining%DAY)/HOUR) > 9 ? "" + Math.floor((remaining%DAY)/HOUR) : "0" + Math.floor((remaining%DAY)/HOUR);
// 	let remMINUTES = Math.floor((remaining%HOUR)/MINUTE) > 9 ? "" + Math.floor((remaining%HOUR)/MINUTE) :  "0" + Math.floor((remaining%HOUR)/MINUTE);
// 	let remSECONDS = Math.floor((remaining%MINUTE)/SECOND) > 9 ? "" + Math.floor((remaining%MINUTE)/SECOND) : "0" + Math.floor((remaining%MINUTE)/SECOND);

// 	days.innerHTML = remDAYS;
// 	hours.innerHTML = remHOURS;
// 	minutes.innerHTML = remMINUTES;
// 	seconds.innerHTML = remSECONDS;
  
// 	setTimeout(showCountdown, 1000);
// }

// showCountdown();
//countdown();
