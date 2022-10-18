const roman = {
    "0": '',
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "20": 'XX',
    "30": "XXX",
    "40": "XL",
    "50": 'L',
    "60": "LX",
    "70": 'LXX',
    "80": 'LXXX',
    "90": 'XC',
    "100": 'C',
    "200": 'CC',
    "300": "CCC",
    "400": "CD",
    "500": "D",
    "600": "DC",
    "700": "DCC",
    "800": "DCCC",
    "900": "CM",
    "1000": "M",
    "2000": "MM",
    "3000": "MMM",
}


function solution(num) {
    // convert the number to a roman numeral
    const arr = [parseInt(num / 1000) * 1000, parseInt(num / 100) % 10 * 100, parseInt(num / 10) % 10 * 10, num % 10].map(
        (ele) => (ele.toString())
    )
    let ans = ''
    for (const x of arr) {
        ans += roman[x]
    }
    return ans
}



//網路上
// function solution(number){
//     // convert the number to a roman numeral
//   var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
//   var ans = '';
//   while(number>0){
//       for(a in roman){ 
//           if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              parseInt
//       }
//   }
//   return ans;
//   }


console.log(solution(2008))