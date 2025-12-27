export async function manageDate (date) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getDate } = await import("./getDate.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getDateValue = await getDate(date);

	if (getDateValue) {
		return getDateValue;
	}

	else {
		await errorHandle(3394, "manageDate");
		return false;
	}

}