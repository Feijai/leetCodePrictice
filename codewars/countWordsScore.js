const score = 'abcdefghijklmnopqrstuvwxyz'.split('').map((ele,idx)=>({[ele]:idx+1}))
function high(x){
  const arr = x.split(' ').map(x=>{
    const eleArr =x.split('').map(y=>{ 
        const obj = score.filter(f=>(Object.keys(f)[0]===y))
        return Object.values(obj[0])[0]
    })
    return eleArr.reduce((a,b)=>(a+b),0)
  })
  const useIdx = arr.findIndex(e=>e===Math.max(...arr))
  return x.split(' ')[useIdx]
 
}


//  網路上攻略
// const alpha = 'abcdefghijklmnopqrstuvwxyz'
// const words = x.split(' ')
// const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))
 
// return words[scores.indexOf(Math.max(...scores))]


console.log(high('abc g h'))