export async function getAPI (apiConfig) {

	const { errorHandle } = await import("../shared/manageError/errorHandle.js");
	const { manageDate } = await import("./modules/manageDate/manageDate.js");
	const { manageAddress } = await import("./modules/manageAddress/manageAddress.js");
	const { manageIdentifier } = await import("./modules/manageIdentifier/manageIdentifier.js");
	const { manageTimezone } = await import("./modules/manageTimezone/manageTimezone.js");
	const { manageRotation } = await import("./modules/manageRotation/manageRotation.js");

	// ---------------

	const getDate = await manageDate(apiConfig.date);
	const getAddress = await manageAddress(apiConfig.address);
	const getIdentifier = await manageIdentifier(getAddress, apiConfig.timezone);
	const getTimezone = await manageTimezone(getIdentifier);
	const getRotation = await manageRotation(getAddress, getIdentifier, getDate);

	if (!await errorHandle("status")) { return false; }

	return {
		"date": getDate.date,
		"address": getAddress,
		"identifier": getIdentifier.identifier,
		"timezone": getTimezone,
		"rotation": getRotation
	};

}