function pipe(funcs) {
    // args 參數傳入 (newPie參數) 
    // 每一個function 使用reducer 回傳 結果
  return (args) => funcs.reduce((arg, fn) => fn(arg), args);
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const newPipe = pipe([times(2), plus(3), times(4)]);

console.log("===newPipe===", newPipe(3));
