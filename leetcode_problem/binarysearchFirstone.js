function firstIndex(arr, target){
    // your code here
      let left =0
      let right = arr.length -1
        while(left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(arr[middle] === target) {
          while (arr[middle-1]===target){
              middle--
          }
          return middle
        } else if(arr[middle] > target) {
          right = middle - 1
        } else {
          left = middle + 1
        }
      }
      return -1
  }


console.log([1,2,3,4,4,4,4, 100, 1000, 10000],4)    