function sortArray(array) {
  const odd = array.filter(x => (x%2!==0)).sort((a,b)=>(a-b))
  return  array.map(ele=> ele %2 !==0 ? odd.shift(): ele)
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]))
