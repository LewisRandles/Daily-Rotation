export async function manageTimezone (timezone) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getTimezone } = await import("./getTimezone.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getTimezoneValue = await getTimezone(timezone);

	if (getTimezoneValue) {
		return getTimezoneValue;
	}

	else {
		await errorHandle(5868, "manageTimezone");
		return false;
	}

}