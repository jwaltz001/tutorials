// Binary Search
// Given an array, a value, and specified start and end points,
//     Find the middle element in the specified subsection. (If this subsection of the array has an even number of elements, take the one just left of center.)
//     Is there just one element in this subarray? Is that what we want?
//         Then great — we’re done! We have our index.
//     If our subsection got shrank all the way down to 0 size,
//         Then, welp, it’s not there.
//     If not,
//         If the word we’re searching for comes before this middle element,
//             Search the subsection of the array from 0 to the element right before the middle element.
//         Or, if it comes after this middle element,
//             Search the subsection of the array from just to the element through to the end.

//Picu Bank
//
// const picuBank = function(d,a,m,b,x){
// 	let accountBalance = d;
// 	//Add <a> dollars for <m> months to original amount <d>
// 	accountBalance
// }
//
// picuBank(2,5,4,3,51);

//Code Wars Find the Parity Outlier
//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers) {
	const evenIntegersArr = [];
	const oddIntegersArr = [];
	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) {
			evenIntegersArr.push(integers[i]);
		} else {
			oddIntegersArr.push(integers[i]);
		}
		if (evenIntegersArr.length > 0 && oddIntegersArr.length > 0 && i > 2) {
			break;
		}
	}
	if (evenIntegersArr.length === 1) {
		return evenIntegersArr[0];
	} else {
		return oddIntegersArr[0];
	}
}

// Examples
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
