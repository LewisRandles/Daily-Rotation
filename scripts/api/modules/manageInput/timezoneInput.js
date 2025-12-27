export async function timezoneInput (timezoneValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patterns } = await import("../../../shared/manageRegex.js");

	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");

	// ---------------

	if (await conditionCheck(timezoneValue, "string")) {

		let characterCheck;

		if (timezoneValue === "local") {
			characterCheck = timezoneValue;
		}

		else {

			const validPatterns = ["pattern14", "pattern15", "pattern16"];

			for await (const pattern of validPatterns) {

				if (patterns[pattern].test(timezoneValue)) {
					characterCheck = timezoneValue;
				}

			}

		}

		if (characterCheck) {

			const formatValue = (await spaceFormat(String(characterCheck), "singleSpace"));

			if (formatValue) {
				return formatValue;
			}

			else {
				await errorHandle(9706, "timezoneInput");
				return false;
			}

		}

		else {
			await errorHandle(6447, "timezoneInput");
			return false;
		}

	}

	else {
		await errorHandle(3620, "timezoneInput");
		return false;
	}

}