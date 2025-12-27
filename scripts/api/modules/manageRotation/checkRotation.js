export async function checkRotation (nameValue, itemValue, nameTable) {

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

		// sunrise
		case nameTable.children.item1.name.altName:

		// sunset
		case nameTable.children.item2.name.altName:

		// solar_noon
		case nameTable.children.item3.name.altName:

		// civil_twilight_begin
		case nameTable.children.item5.name.altName:

		// civil_twilight_end
		case nameTable.children.item6.name.altName:

		// nautical_twilight_begin
		case nameTable.children.item7.name.altName:

		// nautical_twilight_end
		case nameTable.children.item8.name.altName:

		// astronomical_twilight_begin
		case nameTable.children.item9.name.altName:

		// astronomical_twilight_end
		case nameTable.children.item10.name.altName: {
			return await patternTest(itemValue, "pattern12", 2123, "checkRotation");
		}

		// day_length
		case nameTable.children.item4.name.altName: {
			return await patternTest(itemValue, "pattern13", 3084, "checkRotation");
		}

	}

}