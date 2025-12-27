export async function checkDifference (timeStart, timeEnd) {

	const { timeDifference } = await import("./timeDifference.js");
	const { validDate } = await import("./validDate.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");

	// ---------------

	const validStart = await validDate(timeStart, 9919, "checkDifference");
	const validEnd = await validDate(timeEnd, 5355, "checkDifference");

	if (validStart && validEnd) {

		const getDifference = await timeDifference(validStart, validEnd);

		if (getDifference) {
			return getDifference;
		}

		else {
			await errorHandle(4715, "checkDifference");
			return false;
		}

	}

	else {
		await errorHandle(4067, "checkDifference");
		return false;
	}
	
};