<div align="center"> <img width="300px" src="https://github.com/LewisRandles/Daily-Rotation/blob/1d111b663a8c386454e8057e4f2f0dfe4c8d0dd1/DAILY%20ROTATION.png"> </div>

<h1 align="center">Daily Rotation API Repacker</h1>

<p align="center">Accurate sunrise, sunset, and twilight times for any date and time at supported locations.</p>

<div align="center"> <img src="https://img.shields.io/badge/Release-V1.0-2EA44F?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/maintained-yes-2EA44F?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/Uncompressed-62.3%20kb-007ec6?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/compressed-47.8%20kb-007ec6?style=for-the-badge" alt="Badge"> <img src="https://img.shields.io/badge/Licence-MIT-007ec6?style=for-the-badge" alt="Badge"> </div>

<br>

# Introduction

Daily Rotation is a free, no auth, user-friendly API library that provides accurate sunrise, sunset, and twilight times for any timezone mixed with any supported location worldwide. This project is designed for anyone from photographers and hikers to astronomers and general enthusiasts who wants to plan activities around natural light.

<br>
 
# Table of Contents

- [Downloading](#downloading)
	- [Different Versions](#different-versions)
	- [Download Page](#download-page)
- [Installing](#installing)
	- [In your JavaScript file](#in-your-javascript-file)
- [Usage](#usage)
	- [No Parameters](#no-parameters)
	- [First Parameter](#first-parameter)
	- [Second Parameter](#second-parameter)
	- [Third Parameter](#third-parameter)
	- [Supported Locations](#supported-locations)
- [Processing](#processing)
	- [Normalisation](#normalisation)
	- [Sanitization](#sanitization)
 - [Customisation](#customisation)
	- [Parent Names](#parent-names)
	- [Child Names](#child-names)
- [Demo](#demo)
	- [Live Demo](#live-demo)
- [Authors](#authors)
- [Credit](#credit)
- [License](#license)

<br>

# Downloading

### Different Versions
Each release provides two configuations of the project.

 - The bundled, minified format known as "production".
 - The unbundled, unminified format known as "development".

### Download Page
[https://github.com/LewisRandles/Daily-Rotation/releases](https://github.com/LewisRandles/Daily-Rotation/releases)

<br>

# Installing

### In your JavaScript file

```javascript

	// Using the unbundled version needs to be kept with the internal files.
	import dailyRotation from './scripts/dailyRotation_unbundled.js';

	// Using the bundled version is standalone and has no internal files.
	import dailyRotation from './dailyRotation_bundled.js';

```

<br>

# Usage

### No Parameters

Providing no parameters will result in the default information being set.

```javascript
await dailyRotation();
```

<br>

### First Parameter

The first parameter is providing the desired `date`. The format is case-insensitive.

| First Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `date` | `string` | Supported `date` formats include `DD-MM-YYYY`, `YYYY-MM-DD`, `today`, `tomorrow` and `yesterday`. |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `date` | `string` | `date` is in ISO8601 format. |

```javascript

// Argument object.
await dailyRotation({"date": "2025-01-01"});

```

```javascript

// External object.
const apiConfig = {
	"date": "2025-01-01"
}

await dailyRotation(apiConfig);

```

<br>

### Second Parameter
The second parameter is providing the desired `address` within the supported locations. The format is case-insensitive.

| Second Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `address` | `string` | Supports a valid `address` string from the supported locations list. |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `address` | `string` | `address` decides which address is selected. |

```javascript

// Argument object.
await dailyRotation({"date": "2025-01-01", "address": "london, united kingdom"});

```

```javascript

// External object.
const apiConfig = {
	"date": "2025-01-01",
	"address": "london, united kingdom"
}

await dailyRotation(apiConfig);

```

<br>

### Third Parameter
The third parameter is providing the desired `timezone`. The format is case-insensitive.

| Third Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `timezone` | `string` | Supported `timezone` formats include `local` and any valid IANA timezone. |

| Usage | Type | Description |
| :-------- | :------- | :------------------------- |
| `timezone` | `string` | `timezone` decides which timezone is selected. |

```javascript

// Argument object.
await dailyRotation({"date": "2025-01-01", "address": "london, united kingdom", "timezone": "Europe/London"});

```

```javascript

// External object.
const apiConfig = {
	"date": "2025-01-01",
	"address": "london, united kingdom",
	"timezone": "Europe/London"
}

await dailyRotation(apiConfig);

```

<br>

### Supported locations
The current list of supported locations

<table><thead>
  <tr>
    <th colspan="5">Supported Location Strings</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Tokyo, Japan</td>
	<td>New York, United States</td>
	<td>Oslo, Norway</td>
	<td>Copenhagen, Denmark</td>
	<td>Seoul, South Korea</td>
  </tr>
  <tr>
    <td>Los Angeles, United States</td>
	<td>London, United Kingdom</td>
	<td>Paris, France</td>
	<td>Toronto, Canada</td>
	<td>Stockholm, Sweden</td>
  </tr>
  <tr>
    <td>Helsinki, Finland</td>
    <td>Berlin, Germany</td>
    <td>Sydney, Australia</td>
    <td>Auckland, New Zealand</td>
	<td>Abchorage, Alaska</td>
  </tr>
</tbody>
</table>

<br>

# Processing

### Normalisation
During normalization, raw API fields such as latitude and longitude are combined into `"address": { "lat": 40.7127281, "lon": -74.0060152 }`, timestamps are split into `"datetime"`, `"utc_datetime"`, and `"utc_offset"`, solar times are grouped under `"rotation"`, administrative fields are simplified into `"displayName"`. Objects provide more reliable and consistent access than arrays while enabling easier manipulation and processing of nested data structures. Nested objects are flattened, redundant metadata and overlapping identifiers are removed, empty or missing fields are normalized, boolean and encoded values are standardized, and all data is organized into a uniform, consistent key-value JSON structure to produce a clean and predictable final result.

### Sanitization
During sanitization, instead of leaving object values as `null` or `undefined`, missing or empty fields are filled with a placeholder such as `"no value"` to ensure that every key in the final result has a valid string; this prevents errors in downstream processing, makes the dataset fully predictable, and allows client applications to safely read and display all values without additional null checks.

<br>

# Customisation
This JSON serves as a configuration layer that lets you enable or disable individual parent and child fields and rename them through `altName`, giving you full control over which properties appear in the final output. Some values from the raw API return are intentionally omitted because they are considered unnecessary or not useful.

### Parent Names
The parents group defines the top-level fields that can be enabled, disabled, or renamed, allowing you to control which main object properties appear in the output.

```javascript

"parents": {

	"item1": {
		"name": {
			"original": "defaultName",
			"altName": "customName"
		},
		"used": true
	},

	...

}

```

### Child Names
The children group manages the nested fields within those parent objects, giving similar control over which sub-properties are included and how they are labeled.

```javascript

"children": {
	
	"item1": {
		"name": {
			"original": "defaultName",
			"altName": "customName"
		},
		"used": true,
		"validate": "checkRotation"
	},

	...

}

```

<br>

# Demo

### Live Demo
Try the hosted demo via [GitHub Pages Demo](https://lewisrandles.github.io/Daily-Rotation)

<br>

# Authors

- [@LewisRandles](https://www.github.com/LewisRandles)


<br>

# Credit

 - For solar activity, the [Sunrise API](https://sunrise-sunset.org/api)
 - For address information, the [OpenStreetMap Nominatim API](https://nominatim.org/release-docs/latest/api/Overview)
 - For country code information, the [Big Data Cloud API](https://www.bigdatacloud.com/reverse-geocoding)
 - For timezone information, the [World Time API](https://worldtimeapi.org/)

<br>

# License

[MIT License](https://github.com/LewisRandles/Daily-Rotation/blob/main/LICENSE)
