var math = {
	round: value => {
		if (typeof value != "number") {
			return NaN;
		} else {
			if (
				Number.isInteger(value) === true
			) {
				return value;
			} else {
				var toArr = value
					.toString()
					.split(".");
				var mainVal = Number(toArr[0]);
				var apprVal = Number(
					toArr[1].split("")[0]
				);
				if (
					apprVal >= 0 &&
					apprVal <= 4
				) {
					return mainVal;
				} else if (
					apprVal >= 5 &&
					apprVal <= 9
				) {
					return mainVal + 1;
				}
			}
		}
	},
	ceil: value => {
		if (typeof value != "number") {
			return NaN;
		} else {
			if (
				Number.isInteger(value) === true
			) {
				return value;
			} else {
				var toArr = value
					.toString()
					.split(".");
				var mainVal = Number(toArr[0]);
				return mainVal + 1;
			}
		}
	},
	floor: value => {
		if (typeof value != "number") {
			return NaN;
		} else {
			if (
				Number.isInteger(value) === true
			) {
				return value;
			} else {
				var toArr = value
					.toString()
					.split(".");
				var mainVal = Number(toArr[0]);
				return mainVal;
			}
		}
	},
};

console.log(math.ceil(104.14));
