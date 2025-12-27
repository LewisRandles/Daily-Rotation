export async function getDate (date) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");
	const { fetchDate } = await import("../../components/fetchDate.js");
	const { dateNames } = await import("./dateNames.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getModeValue = await fetchDate(date);

	if (getModeValue) {

		const returnValue = getModeValue;

		if (await conditionCheck(returnValue, "object")) {

			const getAmount = await objectLoop(returnValue);

			const itemStorage = {

				"date": {
					"type": "object",
					"value": returnValue
				},

				"amount": {
					"type": "number",
					"value": getAmount
				},

				"name": {
					"type": "object",
					"value": dateNames
				}

			};

			const getProcess = await sendProcess(itemStorage);

			if (getProcess) {
				return getProcess.date;
			}

			else {
				await errorHandle(5645, "getDate");
				return false;
			}

		}

		else {
			await errorHandle(5420, "getDate");
			return false;
		}

	}

	else {
		await errorHandle(5675, "getDate");
		return false;
	}

}