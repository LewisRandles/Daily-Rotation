export async function getTimezone (timezone) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");
	const { fetchTimezone } = await import("../../components/fetchTimezone.js");
	const { timezoneNames } = await import("./timezoneNames.js");
	const { checkDifference } = await import("./checkDifference.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getModeValue = await fetchTimezone(timezone);

	if (getModeValue) {

		const returnValue = getModeValue;

		if (await conditionCheck(returnValue, "object")) {

			const getAmount = await objectLoop(returnValue);

			const itemStorage = {

				"timezone": {
					"type": "object",
					"value": returnValue
				},

				"amount": {
					"type": "number",
					"value": getAmount
				},

				"name": {
					"type": "object",
					"value": timezoneNames
				}

			};

			const getProcess = await sendProcess(itemStorage);

			if (getProcess) {
				
				const localTime = getProcess.timezone.datetime;
				const utcTime = getProcess.timezone.utc_datetime;

				getProcess.timezone["difference"] = await checkDifference(utcTime, localTime);

				return getProcess.timezone;

			}

			else {
				await errorHandle(5645, "getRotation");
				return false;
			}

		}

		else {
			await errorHandle(5639, "getTimezone");
			return false;
		}

	}

	else {
		await errorHandle(6777, "getTimezone");
		return false;
	}

}