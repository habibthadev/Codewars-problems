/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/



let sheeps = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true
];

function countSheeps(sheeps) {
  var num = 0;
  sheeps.forEach(sheep => {
    if (typeof sheep !== "boolean") {
      num += 0;
    } else if (sheep == false) {
      num += 0;
    } else if (sheep == true) {
      num += 1;
    }
  })
  
  return num;
  }
// 	let allSheeps = sheeps.filter(sheep => sheep == true);

// 	return allSheeps.length;


console.log(countSheeps(sheeps));
