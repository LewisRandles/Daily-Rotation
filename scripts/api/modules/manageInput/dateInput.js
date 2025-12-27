export async function dateInput (dateValue) {

	const { spaceFormat } = await import("../../../shared/spaceFormat.js");
	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { patterns } = await import("../../../shared/manageRegex.js");
	const { dateFormat } = await import("../manageDate/dateFormat.js");

	const { conditionCheck } = await import("../../../shared/condition/conditionCheck.js");

	// ---------------

	if (await conditionCheck(dateValue, "string")) {

		let characterCheck;

		if (patterns.pattern4.test(dateValue)) {
			characterCheck = dateValue;
		}

		else if (patterns.pattern7.test(dateValue) || patterns.pattern8.test(dateValue)) {

			const removeTimezone = dateValue.replace(patterns.pattern6, "");

			if (patterns.pattern8.test(dateValue)) {
				characterCheck = await dateFormat(removeTimezone);
			}

			else {
				characterCheck = removeTimezone;
			}

		}

		else {
			await errorHandle(2064, "dateInput");
			return false;
		}

		if (characterCheck) {

			const formatValue = (await spaceFormat(String(characterCheck), "singleSpace")).toLowerCase();

			if (formatValue) {
				return formatValue;
			}

			else {
				await errorHandle(4374, "dateInput");
				return false;
			}

		}

		else {
			await errorHandle(2978, "dateInput");
			return false;
		}

	}

	else {
		await errorHandle(3799, "dateInput");
		return false;
	}

}