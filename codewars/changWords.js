function solution(str){
    let ans=''
    for (let i = str.length ; i>=0 ; i--){
        console.log(str[i])
      ans += str[i]
    }
    return ans
  }

  // 網路上解法 
  //function solution(str) (str.split('').reverse().join(''));  

  console.log(solution('world'))