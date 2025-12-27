export async function getAddress (address) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");
	const { fetchAddress } = await import("../../components/fetchAddress.js");
	const { addressNames } = await import("./addressNames.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getModeValue = await fetchAddress(address);

	if (getModeValue) {

		const returnValue = getModeValue[0];

		if (await conditionCheck(returnValue, "object")) {

			const getAmount = await objectLoop(returnValue);

			const itemStorage = {

				"address": {
					"type": "object",
					"value": returnValue
				},

				"amount": {
					"type": "number",
					"value": getAmount
				},

				"name": {
					"type": "object",
					"value": addressNames
				}

			};

			const getProcess = await sendProcess(itemStorage);

			if (getProcess) {
				return getProcess;
			}

			else {
				await errorHandle(5645, "getAddress");
				return false;
			}

		}

		else {
			await errorHandle(7209, "getAddress");
			return false;
		}

	}

	else {
		await errorHandle(5657, "getAddress");
		return false;
	}

}