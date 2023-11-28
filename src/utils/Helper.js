const weekDays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednessday",
	"Thursday",
	"Friday",
	"Saturday",
];

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

function formatDate(number) {
	if (number < 10) return `0${number}`;
	return number;
}

export function dueDate(duedate) {
	const tododate = new Date(duedate); //original date is not string
	if (tododate - new Date() < 0) return "OverDue";
	if (tododate - new Date() < 86400000) return "tomorrow";
	if (tododate - new Date() > 86400000 && tododate - new Date() < 518400000) {
		return weekDays[tododate.getDay()];
	}
	return `${tododate.getFullYear()}/${months[tododate.getMonth()]}/${formatDate(
		tododate.getDate()
	)}`;
}
