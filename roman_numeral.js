class RomanNumerals {
  static toRoman(num) {
	const romanNumerals = [
		{ value: 1000, numeral: "M" },
		{ value: 900, numeral: "CM" },
		{ value: 500, numeral: "D" },
		{ value: 400, numeral: "CD" },
		{ value: 100, numeral: "C" },
		{ value: 90, numeral: "XC" },
		{ value: 50, numeral: "L" },
		{ value: 40, numeral: "XL" },
		{ value: 10, numeral: "X" },
		{ value: 9, numeral: "IX" },
		{ value: 5, numeral: "V" },
		{ value: 4, numeral: "IV" },
		{ value: 1, numeral: "I" },
	];

	let result = "";
	for (const {
		value,
		numeral,
	} of romanNumerals) {
		while (num >= value) {
			result += numeral;
			num -= value;
		}
	}
	return result;
};

static fromRoman(roman) {
	const romanValues = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1,
	};

	let total = 0;
	let prevValue = 0;

	for (
		let i = roman.length - 1;
		i >= 0;
		i--
	) {
		const currentValue =
			romanValues[roman[i]];

		if (currentValue < prevValue) {
			total -= currentValue;
		} else {
			total += currentValue;
		}

		prevValue = currentValue;
	}

	return total;
 }
}