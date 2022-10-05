function twinPrime(n) {
    if (n < 4) return 0;
    let r = 1;
    for (let i = 5; i < n; i += 6) if (f(i) && f(i + 2)) r++;
    return r;
  }
  
  function f(n) {
    for (let i = 3; i <= n**0.5; i += 2) if (n % i === 0) return false;
    return true;
  }