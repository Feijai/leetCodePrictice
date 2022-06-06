var romanToInt = function (s) {
  let ans = 0;
  const rom = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //   str = s.split("");
  //   console.log("===str===", str);
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      if (rom[s[i - 1]] < rom[s[i]]) {
        ans = ans - 2 * rom[s[i - 1]] + rom[s[i]];
      } else ans = ans + rom[s[i]];
    } else if (i === 0) {
      ans = ans + rom[s[i]];
    }
  }
  console.log(ans);
  return ans;
};

romanToInt("III");
