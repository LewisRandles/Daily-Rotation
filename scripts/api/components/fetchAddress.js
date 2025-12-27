export async function fetchAddress (address) {

	const { validAddress } = await import("../modules/manageAddress/validAddress.js");
	const { conditionCheck } = await import("../../shared/condition/conditionCheck.js");
	const { errorHandle } = await import("../../shared/manageError/errorHandle.js");
	const { attemptFetch } = await import("../modules/attemptFetch.js");
	
	// ---------------

	if (await conditionCheck(address, "string")) {

		const formattedString = await validAddress(String(address));

		const fetchURL = encodeURI(`https://nominatim.openstreetmap.org/search?q=${formattedString}&format=jsonv2&limit=1`);

		const returnResult = await attemptFetch(fetchURL);

		if (await conditionCheck(returnResult, "array")) {

			returnResult[0].display_name = formattedString;

			return returnResult;
		
		}

		else {
			await errorHandle(8443, "fetchAddress");
			return false;
		}

	}

	else {
		await errorHandle(6975, "fetchAddress");
		return false;
	}

}