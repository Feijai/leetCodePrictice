function countPositivesSumNegatives(input) {
    // your code here
    if (!input.length) return input
    let a=0;
    let b= 0;
    for( x of input){
        console.log(x)
      if (x>0) {
        a += 1
      } else {
        b += x
      }
    }
    return [a,b]
  }

const inputArray= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

console.log(countPositivesSumNegatives(inputArray))