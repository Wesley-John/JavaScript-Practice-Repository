const getIndexToIns = (arr, num) => {
  if (arr.length === 0) return 0;
  
  const index = arr.sort((a,b) => a - b).findIndex(number => number >= num);

  if (index === -1) {
    return arr.length;
  } else {
    return index;
  }
};

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) //3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // 2
console.log(getIndexToIns([40, 60], 50)) // 1
console.log(getIndexToIns([3, 10, 5], 3)) // 0
console.log(getIndexToIns([5, 3, 20, 3], 5)) // 2
console.log(getIndexToIns([2, 20, 10], 19)) // 2
console.log(getIndexToIns([3, 10, 5], 11)) // 3
console.log(getIndexToIns([], 5)) // 0
