function persistence(num) {
  if (num /10 <1) return 0
  let a = num 
  let i=0
  while (a/10 >= 1){
    a= a.toString().split('').reduce((a,b)=>parseInt(a)*parseInt(b))   
    i++
  }
  return i
}

  console.log(persistence(39))