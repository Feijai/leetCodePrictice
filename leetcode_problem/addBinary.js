var addBinary = function (a, b) {
  // 位數一長就會變成科學符號
  //   let ans = "";
  //   let carry = 0;
  //   let temp = new String(parseInt(a) + parseInt(b));
  //   console.log(temp);
  //   for (let i = temp.length - 1; i >= 0; i--) {
  //     console.log("===i===", temp[i]);
  //     if (parseInt(temp[i]) + carry < 2) {
  //       console.log("in 1");
  //       ans = `${parseInt(temp[i]) + carry}` + ans;
  //       carry = 0;
  //     } else if (parseInt(temp[i]) + carry > 1) {
  //       console.log(" in 2");
  //       ans = `${parseInt(temp[i]) + carry - 2}` + ans;
  //       carry = 1;
  //     }
  //   }
  //   ans = carry === 1 ? "1" + ans : ans;
  //   return ans;

  if (a === "0" && b === "0") return "0";
  let output = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    const num1 = a[i] === undefined ? 0 : +a[i];
    const num2 = b[j] === undefined ? 0 : +b[j];
    if (num1 + num2 + carry < 2) {
      output = (num1 + num2 + carry).toString() + output;
      carry = 0;
    } else if (num1 + num2 + carry >= 2) {
      output = (num1 + num2 + carry - 2).toString() + output;
      carry = 0;
      carry++;
    }
    i--, j--;
  }
  return `${carry || ""}${output}`;
};

console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);
