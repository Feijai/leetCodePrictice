function orderWeight(str) {
    // your code
    const arr = str.split(' ').map(ele => [ele, ele.split('').reduce((a, b) => a + parseInt(b), 0)]).sort((a, b) => {
    console.log(a[1] - b[1] , a[0]>b[0]  , -a[0]+b[0])
    return a[1] - b[1] || a[0]>b[0]  || -a[0]+b[0]
    })
    return arr.map(ele => ele[0]).join(' ')
}


// function sumOfParts(num) {
//     return num.split('').reduce((a, b) => a + +b, 0)
// } 

// function orderWeight(string) {
//     return string
//         .split(' ')
//         .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
//         .join(' ');
// }

// function orderWeight(strng) {
//     const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
//      function comp(a,b){
//        let sumA = sum(a);
//        let sumB = sum(b);
//        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
//       };
//     return strng.split(' ').sort(comp).join(' ');
//    }

// console.log(['13','112','400','211','31'].sort())

console.log(orderWeight("1 2 200 4 4 6 6 7 7 81 27 18 72 9 91 425 31064 7920 67407 96488 34608557 71899703"))
