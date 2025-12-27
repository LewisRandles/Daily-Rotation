export async function addressInput (addressValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { validAddress } = await import("../manageAddress/validAddress.js");

	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");

	// ---------------

	if (await conditionCheck(addressValue, "string")) {

		const characterCheck = await validAddress(String(addressValue));

		if (characterCheck) {

			const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

			if (formatValue) {
				return formatValue;
			}

			else {
				await errorHandle(3797, "addressInput");
				return false;
			}

		}

		else {
			await errorHandle(3374, "addressInput");
			return false;
		}

	}

	else {
		await errorHandle(2428, "addressInput");
		return false;
	}

}