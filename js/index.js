const daySelector = document.querySelector('#days');
const hoursSelector = document.querySelector('#hours');
const minutesSelector = document.querySelector('#mins');
const secondsSelector = document.querySelector('#seconds');

const newYears = '1 Jan 2022';

function countDown() {
	const newYearDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds % 60);
	return {
		days,
		hours,
		minutes,
		seconds,
	};
}

const timerFormat = (time) => (time < 10 ? `0${time}` : time);

setInterval(() => {
	const result = countDown();
	daySelector.textContent = timerFormat(result.days);
	hoursSelector.textContent = timerFormat(result.hours);
	minutesSelector.textContent = timerFormat(result.minutes);
	secondsSelector.textContent = timerFormat(result.seconds);
}, 1000);
