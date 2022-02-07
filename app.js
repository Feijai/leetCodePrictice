let arr = ["herry", "ron", "snap"];

// for (const x of arr) {
//   console.log(x);
// }

const abc = arr.forEach((ele) => {
  ele.length >= 4;
});
console.log(abc);

const time1 = window.performance.now();

const time2 = window.performance.now();
const timeDiff = (time2 - time1) / 1000;
console.log(`花費秒數 : ${timeDiff} 秒`);
