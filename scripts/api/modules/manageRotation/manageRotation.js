export async function manageRotation (address, timezone, date) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getRotation } = await import("./getRotation.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const rotationData = {
		"lat": address.lat,
		"lon": address.lon,
		"timezone": timezone.identifier,
		"date": date.date
	};

	const getRotationValue = await getRotation(rotationData);

	if (getRotationValue) {
		return getRotationValue;
	}

	else {
		await errorHandle(9955, "manageRotation");
		return false;
	}

}