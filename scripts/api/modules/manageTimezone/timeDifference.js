export async function timeDifference (startValue, endValue) {

	let startDate;
	let endDate;
	let direction;

	if (startValue > endValue) {
		direction = "behind";
		startDate = new Date(endValue);
		endDate = new Date(startValue);
	}

	else {
		direction = "ahead";
		startDate = new Date(startValue);
		endDate = new Date(endValue);
	}

	if (isNaN(startDate) || isNaN(endDate)) {
		return null;
	}

	const segment = {
		"years": endDate.getFullYear() - startDate.getFullYear(),
		"months": endDate.getMonth() - startDate.getMonth(),
		"days": endDate.getDate() - startDate.getDate(),
		"hours": endDate.getHours() - startDate.getHours(),
		"minutes": endDate.getMinutes() - startDate.getMinutes(),
		"seconds": endDate.getSeconds() - startDate.getSeconds(),
		"milliseconds": endDate.getMilliseconds() - startDate.getMilliseconds()
	};

	if (segment.milliseconds < 0) {
		segment.milliseconds += 1000;
		segment.seconds--;
	}

	if (segment.seconds < 0) {
		segment.seconds += 60;
		segment.minutes--;
	}

	if (segment.minutes < 0) {
		segment.minutes += 60;
		segment.hours--;
	}

	if (segment.hours < 0) {
		segment.hours += 24;
		segment.days--;
	}

	if (segment.days < 0) {
		const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
		segment.days += prevMonth.getDate();
		segment.months--;
	}

	if (segment.months < 0) {
		segment.months += 12;
		segment.years--;
	}

	segment.weeks = Math.floor(segment.days / 7);
	segment.days = segment.days % 7;

	segment.direction = direction;

	return segment;

}