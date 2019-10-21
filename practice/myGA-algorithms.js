function mergeSort(arr, n=1) {
	if(arr.length > 1){
		n++;
		const arr1 = arr.splice(0,Math.floor(arr.length/2));
	    console.log(arr, n)
		console.log(arr1, n);
        return merge(mergeSort(arr, n), mergeSort(arr1, n), n);
    }
	return arr
}

function quickSort(arr, leftIndex=0, rightIndex=arr.length-1){
	console.log("start of a quicksort call:\n", "arr", arr, "leftIndex", leftIndex, "rightIndex", rightIndex);
	if (leftIndex < rightIndex) {
		let pivotIndex = rightIndex;
		//Math.floor(Math.random() * (rightIndex - leftIndex));
		console.log("pivotIndex",pivotIndex, "pivotValue", arr[pivotIndex]);
		const partitionIndex = partition(arr,pivotIndex,leftIndex,rightIndex);

		quickSort(arr, leftIndex, partitionIndex-1);
		quickSort(arr, partitionIndex + 1, rightIndex);
	}
	console.log("FINAL", arr);
	return arr;
};

//Helper functions for Quick Sort
function partition(arr, pivotIndex, leftIndex, rightIndex){
	const pivotValue = arr[pivotIndex];
	let partitionIndex = leftIndex;

	for (var i = leftIndex; i < rightIndex; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr,rightIndex, partitionIndex);
	console.log("arr at end of a partition call", arr);
	return partitionIndex;
}

function swap(arr, indexToSwap1, indexToSwap2){
	let tempValue = arr[indexToSwap1];
	arr[indexToSwap1] = arr[indexToSwap2];
	arr[indexToSwap2] = tempValue;
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
    // const otherArray = [-3, -1, 5, 100];
    // const otherSorted = quickSort(otherArray);
	// console.log("quick othersorted", otherSorted)
    // //[-3, -1, 5, 100]
