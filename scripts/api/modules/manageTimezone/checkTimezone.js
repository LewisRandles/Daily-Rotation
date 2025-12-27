export async function checkTimezone (nameValue, itemValue, nameTable) {

	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { patternTest } = await import("../../../shared/patternTest.js");
	const { patterns } = await import("../../../shared/manageRegex.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	switch (nameValue) {

		// utc_offset
		case nameTable.children.item1.name.altName: {
			return await patternTest(itemValue, "pattern6", 7535, "checkTimezone");
		}

		// abbreviation
		case nameTable.children.item10.name.altName:

		// dst_offset
		case nameTable.children.item11.name.altName: {
			return await patternTest(itemValue, "pattern4", 4668, "checkTimezone");
		}

		// datetime
		case nameTable.children.item5.name.altName:

		// utc_datetime
		case nameTable.children.item6.name.altName: {
			const formatTimezone = itemValue.replace(patterns.pattern6, "");
			return await patternTest(formatTimezone, "pattern7", 3789, "checkTimezone");
		}

	}

}