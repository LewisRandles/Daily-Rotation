export async function manageIdentifier (identifier, choice) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getIdentifier } = await import("./getIdentifier.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	let getIdentifierValue;

	if (choice === "local") {
		getIdentifierValue = await getIdentifier(identifier);
	}

	else {
		getIdentifierValue = {
			"identifier": choice
		};
	}

	if (getIdentifierValue) {
		return getIdentifierValue;
	}

	else {
		await errorHandle(6491, "manageIdentifier");
		return false;
	}

}