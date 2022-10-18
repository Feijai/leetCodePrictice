
function rank(st, we, n) {
    if (n> we.length) return 'Not enough participants'
    if (st.length ===0) return 'No participants'
    const score = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const strArr = st.toUpperCase().split(',').map((x,idx)=>({[st.split(',')[idx]]: (x.length+[...x].map(y=>score.indexOf(y)+1).reduce((a,b)=>(a+b),0))* we[idx]}))
    const sortArr = strArr.sort((a,b)=>(-Object.values(a)[0]+Object.values(b)[0]))
    const rankValue = Object.values(sortArr[n-1])[0]
    const useArr=sortArr.filter(ele=> Object.values(ele)[0]===rankValue)
    const needIdx = useArr.findIndex(ele=>ele===sortArr[n-1])
    if (useArr.length>1){
      return  useArr.map(ele => Object.keys(ele)[0]).sort()[needIdx]
    }else {
      return Object.keys(useArr[0])[0]
    }
  }