export async function fetchDate (date) {

	const { spaceFormat } = await import("../../shared/spaceFormat.js");
	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");

	// ---------------

	if (await conditionCheck(date, "string")) {

		const setDate = (await spaceFormat(String(date), "noSpace"));

		const returnResult = { "date": setDate };

		if (await conditionCheck(returnResult, "object")) {
			return returnResult;
		}

		else {
			await errorHandle(4117, "fetchDate");
			return false;
		}

	}

	else {
		await errorHandle(9031, "fetchDate");
		return false;
	}

}
