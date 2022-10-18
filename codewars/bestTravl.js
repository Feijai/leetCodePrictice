function chooseBestSum(max, nTowns, list) {
    let res = 0
    
    const count = (arr, n, currSum) => {
      if (n) {
        arr.forEach((d, i) => {
          count(arr.slice(i + 1), n - 1, currSum + d)
        })
      } else {
        if (currSum > res && currSum <= max) res = currSum
      }
    }
    count(list, nTowns, 0)
    
    return res || null
    
  }