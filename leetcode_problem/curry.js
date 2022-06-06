function curry(func) {
    // return 一個function 
      return function curried(...args) {
        // 如果 拿到的參數是 >= 原本funcion 參數
      if (args.length >= func.length) {
        // 使用funcion
        return func.apply(this, args);
      } else {
        return function(...args2) {
          // 迴圈 curried 
          return curried.apply(this, args.concat(args2));
        }
      }
    }
  }

  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 
 const curriedJoin = curry(join)
 
 curriedJoin(1, 2, 3) // '1_2_3'