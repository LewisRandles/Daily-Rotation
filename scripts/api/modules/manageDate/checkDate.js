export async function checkDate (nameValue, itemValue, nameTable) {

	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { patternTest } = await import("../../../shared/patternTest.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	switch (nameValue) {

		// date
		case nameTable.children.item1.name.altName: {

			switch (itemValue) {

				case "today":
				case "yesterday":
				case "tomorrow": {
					return await patternTest(itemValue, "pattern5", 4334, "checkDate");
				}

				default: {
					return await patternTest(itemValue, "pattern7", 2663, "checkDate");
				}

			}

		}

	}

}