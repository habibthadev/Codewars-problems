function generatePascalsTriangle(numRows) {
	let triangle = [];

	for (let i = 0; i < numRows; i++) {
		triangle[i] = new Array(i + 1);
		triangle[i][0] = 1;
		triangle[i][i] = 1;

		for (let j = 1; j < i; j++) {
			triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
		}
	}

	return triangle;
}

function displayPascalsTriangle(numRows) {
	const pascalsTriangle = generatePascalsTriangle(numRows);

	for (let row of pascalsTriangle) {
		console.log(row.join(" "));
	}
}

displayPascalsTriangle(18);
