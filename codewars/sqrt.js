function squareSum(numbers){
    if (!numbers?.length) return 0
    console.log(numbers)
    return numbers.reduce((a,b)=>(a+(b**2)),0)
  }


  console.log(squareSum([-1,2,-3,4]))