export async function checkIdentifier (nameValue, itemValue, nameTable) {

	const { isNully } = await import("../../../shared/condition/isNully.js");
	const { patterns } = await import("../../../shared/manageRegex.js");

	// ---------------

	if (await isNully(itemValue)) {
		return "No Value";
	}

	else {
		itemValue = String(itemValue);
	}

	switch (nameValue) {

		// name
		case nameTable.children.item1.name.altName: {

			const validPatterns = ["pattern14", "pattern15", "pattern16"];

			for await (const pattern of validPatterns) {

				if (patterns[pattern].test(itemValue)) {
					return itemValue;
				}

			}

		}

	}

}