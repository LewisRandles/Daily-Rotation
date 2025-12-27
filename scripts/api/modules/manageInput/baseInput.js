export async function baseInput (configValue) {

	const { dateInput } = await import("./dateInput.js");
	const { addressInput } = await import("./addressInput.js");
	const { timezoneInput } = await import("./timezoneInput.js");
	const { manageBase } = await import("./manageBase.js");

	// ---------------

	const getState = {
		"date": dateInput,
		"address": addressInput,
		"timezone": timezoneInput
	};

	return await manageBase(configValue, getState);

}