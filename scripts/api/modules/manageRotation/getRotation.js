export async function getRotation (rotation) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");
	const { fetchRotation } = await import("../../components/fetchRotation.js");
	const { rotationNames } = await import("./rotationNames.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getModeValue = await fetchRotation(rotation);

	if (getModeValue) {

		const returnValue = getModeValue.results;

		if (await conditionCheck(returnValue, "object")) {

			const getAmount = await objectLoop(returnValue);

			const itemStorage = {

				"rotation": {
					"type": "object",
					"value": returnValue
				},

				"amount": {
					"type": "number",
					"value": getAmount
				},

				"name": {
					"type": "object",
					"value": rotationNames
				}

			};

			const getProcess = await sendProcess(itemStorage);

			if (getProcess) {
				return getProcess.rotation;
			}

			else {
				await errorHandle(5645, "getRotation");
				return false;
			}

		}

		else {
			await errorHandle(3110, "getRotation");
			return false;
		}

	}

	else {
		await errorHandle(7887, "getRotation");
		return false;
	}

}