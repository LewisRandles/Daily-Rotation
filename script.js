
import dailyRotation from "./scripts/dailyRotation_unbundled.js";

// ---------------

const apiConfig = {
	"date": "01-01-2025",
	"address": "london, united kingdom",
	"timezone": "Europe/London"
};

const result = await dailyRotation(apiConfig);

console.log(result);