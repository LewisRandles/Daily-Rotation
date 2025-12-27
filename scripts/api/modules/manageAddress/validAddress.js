export async function validAddress (stringValue) {

	const { supportedAddress } = await import("./supportedAddress.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patterns } = await import("../../../shared/manageRegex.js");

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");

	// ---------------

	if (await conditionCheck(stringValue, "string")) {

		const formatString = (await spaceFormat(String(stringValue), "singleSpace")).toLowerCase();

		if (patterns.pattern11.test(formatString) === true) {

			const locationSplit = [];

			for await (const rawAddress of supportedAddress) {
				const split = rawAddress.split(",")[0].trim().toLowerCase();
				locationSplit.push(split);
			}

			let selectAddress;

			for await (const splitAddress of locationSplit) {

				if (formatString.includes(splitAddress)) {

					for await (const pairAddress of supportedAddress) {

						const formatAddress = pairAddress.toLowerCase();

						if (formatAddress.includes(splitAddress)) {
							selectAddress = pairAddress.toLowerCase();
						}

					};

				}

			}

			if (!!selectAddress === true) {
				return selectAddress;
			}

			else {
				await errorHandle(9101, "validAddress");
				return false;
			}

		}

		else {
			await errorHandle(3512, "validAddress");
			return false;
		}

	}

	else {
		await errorHandle(1265, "validAddress");
		return false;
	}

}