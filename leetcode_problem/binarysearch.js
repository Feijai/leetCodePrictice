function binarySearch(arr, target){
    let left =0
    let right = arr.length -1
      while(left <= right) {
      const middle = Math.floor((left + right) / 2)
      if(arr[middle] === target) {
        return middle
      } else if(arr[middle] > target) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    return -1
  }

console.log('===binarySearch===',  binarySearch([1,2,3,4, 100, 1000, 10000],4)  )