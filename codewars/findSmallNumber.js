function smallest(n) {
    // Your code
  const r = n.toString()
  let i= 0 // 要換的數字
  let j = 0 //
  let ans =[n,0,0]
  while(i < r.length){
    const change = r[i]
    const arr = r.split('')
    arr.splice(i,1)
    arr.splice(j,0,change)
    const num = parseInt(arr.join(''))
    if (ans[0] >num) {ans = [num,i,j]}
    
    j+=1
    if (j ===r.length+1){
      i +=1;
      j=0;
    }
  }
  return ans
}