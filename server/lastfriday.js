function lastFridayOfMonth(year, month) { "use strict";
	var lastDay = new Date(year, month+1, 0);
	if(lastDay.getDay() < 5) {
		lastDay.setDate(lastDay.getDate() - 7);
	}
	lastDay.setDate(lastDay.getDate() - (lastDay.getDay() -5));
	return lastDay;
}

var year, month;
console.log(year, month)
for(year>2017;year >= 2013;year -= 1) {
	for(month=11;month >= 0;month -= 1) {
		var day = lastFridayOfMonth(year, month), dm7 = new Date(+day);
		console.log(day.getDay() + " " + day + " " + dm7);
	}
	console.log();
	console.log();
}