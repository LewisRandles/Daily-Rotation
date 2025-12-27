export async function checkAddress (nameValue, itemValue, nameTable) {

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

		// display_name
		case nameTable.children.item4.name.altName: {
			return await patternTest(itemValue, "pattern11", 7839, "checkAddress");
		}

		// lat
		case nameTable.children.item6.name.altName: {
			return await patternTest(itemValue, "pattern9", 5762, "checkAddress");
		}

		// lon
		case nameTable.children.item8.name.altName: {
			return await patternTest(itemValue, "pattern10", 6079, "checkAddress");
		}

	}

}