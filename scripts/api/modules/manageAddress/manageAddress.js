export async function manageAddress (address) {

	const { errorHandle } = await import("../../../shared/manageError/errorHandle.js");
	const { getAddress } = await import("./getAddress.js");

	// ---------------

	if (!await errorHandle("status")) { return false; }

	const getAddressValue = await getAddress(address);

	if (getAddressValue) {
		return getAddressValue;
	}

	else {
		await errorHandle(2856, "manageAddress");
		return false;
	}

}