var lcm = function (...arg) {
    // TODO: Program me
    const gcd  = (a,b) => b===0 ? a:  gcd(b , a%b )
    return [...arg].reduce((a,b)=>(a*b/gcd(a,b)),1)
  };

console.log(lcm(5, 6, 7, 9, 6, 9, 18, 4, 5, 15, 15, 10, 17, 7))
