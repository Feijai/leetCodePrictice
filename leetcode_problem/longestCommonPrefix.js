// 找array中共同最長的前墜

const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefix = "";
  let l = 0;

  while (l <= strs[0].length - 1) {
    let ch = strs[0][l];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][l] !== ch) {
        return prefix;
      }
    }
    l++;
    prefix += ch;
  }
  return prefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);
