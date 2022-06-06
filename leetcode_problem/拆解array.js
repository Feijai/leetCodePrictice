//已經有現成function Array.prototype.flat()
function flat(arr, depth = 1) {
    // your imeplementation here
    // 如果深度>1 且 arr 內的 值 還有為array 
    while( depth-- > 0 && arr.some(Array.isArray))
    // arr會被重新定義為 .concat(...arr)  
    // concat(1,2,[3])=> [1,2,3]
      arr= [].concat(...arr)
    return arr
  }

  const arr = [1, [2], [3, [4]]];

  flat(arr);