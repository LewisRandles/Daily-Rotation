export async function getIdentifier (identifier) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { sendProcess } = await import("../sendProcess.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");
	const { objectLoop } = await import("../manageProcess/objectLoop.js");
	const { fetchIdentifier } = await import("../../components/fetchIdentifier.js");
	const { identifierNames } = await import("./identifierNames.js");
	const { findObject } = await import("../../../shared/manageObject/findObject.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getModeValue = await fetchIdentifier(identifier);

	if (getModeValue) {

		const getObject = (await findObject(getModeValue, "time zone"))?.parent;

		if (getObject) {

			const getKey = Object.keys(getObject)[0];
			const returnValue = { ["identifier"]: getObject[getKey] };

			if (await conditionCheck(returnValue, "object")) {

				const getAmount = await objectLoop(returnValue);

				const itemStorage = {

					"identifier": {
						"type": "object",
						"value": returnValue
					},

					"amount": {
						"type": "number",
						"value": getAmount
					},

					"name": {
						"type": "object",
						"value": identifierNames
					}

				};

				const getProcess = await sendProcess(itemStorage);

				if (getProcess) {
					return getProcess.identifier;
				}

				else {
					await errorHandle(5645, "getDate");
					return false;
				}

			}

			else {
				await errorHandle(3597, "getIdentifier");
				return false;
			}

		}

		else {
			await errorHandle(5465, "getIdentifier");
			return false;
		}

	}

	else {
		await errorHandle(6788, "getIdentifier");
		return false;
	}

}