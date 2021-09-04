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

const turn = (timeperiod, nextContent) => {

	timeperiod.behind.content.innerHTML = nextContent;
	timeperiod.middle.content.innerHTML = nextContent;

	timeperiod.top.cell.style.transform = "rotateX(90deg)";
	timeperiod.middle.cell.style.transform = "rotateX(0deg)";

	setTimeout(() => {

		timeperiod.top.content.innerHTML = nextContent;
		timeperiod.bottom.content.innerHTML = nextContent;

		timeperiod.top.cell.style.visibility = "hidden";
		timeperiod.middle.cell.style.visibility = "hidden";

		timeperiod.top.cell.style.transition = "all 0 ease 0";
		timeperiod.middle.cell.style.transition = "all 0 ease 0";

		timeperiod.top.cell.style.transform = "rotateX(0deg)";
		timeperiod.middle.cell.style.transform = "rotateX(90deg)";

	}, 600);

	timeperiod.top.cell.style.transition = "transform ease-in .2s";
	timeperiod.middle.cell.style.transition = "transform .2s ease-out .21s";

	timeperiod.top.cell.style.visibility = "visible";
	timeperiod.middle.cell.style.visibility = "visible";
};

const getTimes = (delay=0) => {

	const remaining = objective + delay - Date.now();

	let remDAYS = Math.floor(remaining/DAY) > 9 ? "" + Math.floor(remaining/DAY) : "0" + Math.floor(remaining/DAY);
	let remHOURS = Math.floor((remaining%DAY)/HOUR) > 9 ? "" + Math.floor((remaining%DAY)/HOUR) : "0" + Math.floor((remaining%DAY)/HOUR);
	let remMINUTES = Math.floor((remaining%HOUR)/MINUTE) > 9 ? "" + Math.floor((remaining%HOUR)/MINUTE) :  "0" + Math.floor((remaining%HOUR)/MINUTE);
	let remSECONDS = Math.floor((remaining%MINUTE)/SECOND) > 9 ? "" + Math.floor((remaining%MINUTE)/SECOND) : "0" + Math.floor((remaining%MINUTE)/SECOND);

	return {remDAYS, remHOURS, remMINUTES, remSECONDS}
}

const init = () => {

	const t = getTimes();

	turn(days, t.remDAYS);
	turn(hours, t.remHOURS);
	turn(minutes, t.remMINUTES);
	turn(seconds, t.remSECONDS);
}

const showCountdown = () => {

	const t = getTimes();
	const l = getTimes(-1000);

	if (t.remDAYS != l.remDAYS) turn(days, t.remDAYS);
	if (t.remHOURS != l.remHOURS) turn(hours, t.remHOURS);
	if (t.remMINUTES != l.remMINUTES) turn(minutes, t.remMINUTES);
	if (t.remSECONDS != l.remSECONDS) turn(seconds, t.remSECONDS);
}

const days = getCells("days");
const hours = getCells("hours");
const minutes = getCells("minutes");
const seconds = getCells("seconds");

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const objective = Date.now() + 14 * DAY;

init();

setInterval(() => showCountdown(), 1000);
