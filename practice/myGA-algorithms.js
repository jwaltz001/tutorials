function mergeSort(arr, n=1) {
	if(arr.length > 1){
		n++
		const arr1 = arr.splice(0,Math.floor(arr.length/2));
	    console.log(arr, n)
		console.log(arr1, n);
        return merge(mergeSort(arr, n), mergeSort(arr1, n), n);
    }
	return arr
}

function quickSort(arr, startIndex=1, endIndex=arr.length-1){
	if (startIndex != endIndex) {
		const pivot = arr[0]
		console.log("pivot", pivot);
		while (startIndex < endIndex) {
			if (arr[startIndex] >= pivot) {
				let temp = arr[compareIndex];
				arr[compareIndex] = arr[startIndex];
				arr[startIndex] = temp;
				compareIndex++;
				startIndex++;
			}else{
				compareIndex++;
			}

		}
		let temp = arr[startIndex-1];
		arr[startIndex-1] = arr[0];
		arr[0] = temp;
		console.log(arr,startIndex,compareIndex);
		return quickSort(arr,);
	}else{
		return arr;
	}
}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2, n) {
  var result = [];
  console.log("merge()", arr1, arr2, n);
  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

// Test Scripts

//Merge Sort
    // const myArray = [12,6,3,7,13,8];
    // const sorted = mergeSort(myArray);
    // console.log("sorted", sorted)
		// [3,6,7,8,12,13]
    // const otherArray = [-3, -1, 5, 100];
    // const otherSorted = mergeSort(otherArray);
	// console.log("otherSorted", otherSorted);
		// [-3, -1, 5, 100]

//Quick Sort
    const myArray = [12,6,3,7,13,8];
    const sorted = quickSort(myArray);
    console.log("quick sorted", sorted)
    const otherArray = [-3, -1, 5, 100];
    const otherSorted = quickSort(otherArray);
	console.log("quick othersorted", otherSorted)
    // //[-3, -1, 5, 100]
