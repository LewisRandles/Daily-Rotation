export async function validDate (timeValue, errorValue) {

	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");

	// ---------------

	if (await conditionCheck(timeValue, "string")) {
		return new Date(timeValue).getDate() ? timeValue : false;
	}

	else {
		await errorHandle(errorValue);
		return false;
	}

}