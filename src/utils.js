export const timeFormat12 = (time) => {
	const postfix = +time.substr(0, 2) >= 12 ? "PM" : "AM";
	const hour = +time.substr(0, 2) % 12 || 12;
	const minute = time.substr(3, 2);
	return `${hour}:${minute} ${postfix}`;
};

export const dateStringWithMonthName = (date) => {
	const monthNum = +date.substr(3, 2);
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return `${date.substr(0, 2)} ${months[monthNum - 1]} ${date.substr(6, 4)}`;
};

export const timeDifference = (startTime, endTime) => {
	const newStartDate = new Date(
		2020,
		0,
		1,
		+startTime.substr(0, 2),
		+startTime.substr(3, 2)
	);
	const newEndDate = new Date(
		2020,
		0,
		1,
		+endTime.substr(0, 2),
		+endTime.substr(3, 2)
	);

	return (newEndDate.getTime() - newStartDate.getTime()) / (1000 * 60);
};
