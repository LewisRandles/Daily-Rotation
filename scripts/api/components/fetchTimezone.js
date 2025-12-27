export async function fetchTimezone (timezone) {

	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { attemptFetch } = await import("../modules/attemptFetch.js");

	// ---------------

	if (await conditionCheck(timezone, "object")) {

		const fetchURL = encodeURI(`https://worldtimeapi.org/api/timezone/${timezone.identifier}`);

		const returnResult = await attemptFetch(fetchURL);

		if (await conditionCheck(returnResult, "object")) {
			return returnResult;
		}

		else {
			await errorHandle(5569, "fetchTimezone");
			return false;
		}

	}

	else {
		await errorHandle(6189, "fetchTimezone");
		return false;
	}

}