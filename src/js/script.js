const days = document.querySelector('.days__count');
const hours = document.querySelector('.hours__count');
const minutes = document.querySelector('.minutes__count');
const seconds = document.querySelector('.seconds__count');

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const objective = Date.now() + 14 * DAY;

const showCountdown = () => {
	const remaining = objective - Date.now();
	let remDAYS = Math.floor(remaining/DAY) > 9 ? "" + Math.floor(remaining/DAY) : "0" + Math.floor(remaining/DAY);
	let remHOURS = Math.floor((remaining%DAY)/HOUR) > 9 ? "" + Math.floor((remaining%DAY)/HOUR) : "0" + Math.floor((remaining%DAY)/HOUR);
	let remMINUTES = Math.floor((remaining%HOUR)/MINUTE) > 9 ? "" + Math.floor((remaining%HOUR)/MINUTE) :  "0" + Math.floor((remaining%HOUR)/MINUTE);
	let remSECONDS = Math.floor((remaining%MINUTE)/SECOND) > 9 ? "" + Math.floor((remaining%MINUTE)/SECOND) : "0" + Math.floor((remaining%MINUTE)/SECOND);

	days.innerHTML = remDAYS;
	hours.innerHTML = remHOURS;
	minutes.innerHTML = remMINUTES;
	seconds.innerHTML = remSECONDS;
  
	setTimeout(showCountdown, 1000);
}

showCountdown();
