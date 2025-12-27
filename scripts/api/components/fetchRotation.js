export async function fetchRotation (rotation) {

	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { attemptFetch } = await import("../modules/attemptFetch.js");

	// ---------------

	if (await conditionCheck(rotation, "object")) {

		const fetchURL = encodeURI(`https://api.sunrise-sunset.org/json?lat=${rotation.lat}&lng=${rotation.lon}&date=${rotation.date}&tzid=${rotation.timezone}`);

		const returnResult = await attemptFetch(fetchURL);

		if (await conditionCheck(returnResult, "object")) {
			return returnResult;
		}

		else {
			await errorHandle(5547, "fetchRotation");
			return false;
		}

	}

	else {
		await errorHandle(6205, "fetchRotation");
		return false;
	}

}