export async function fetchIdentifier (identifier) {

	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { attemptFetch } = await import("../modules/attemptFetch.js");

	// ---------------

	if (await conditionCheck(identifier, "object")) {

		const fetchURL = encodeURI(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${identifier.lat}&longitude=${identifier.lon}`);

		const returnResult = await attemptFetch(fetchURL);

		if (await conditionCheck(returnResult, "object")) {
			return returnResult;
		}

		else {
			await errorHandle(7043, "fetchIdentifier");
			return false;
		}

	}

	else {
		await errorHandle(8063, "fetchIdentifier");
		return false;
	}

}