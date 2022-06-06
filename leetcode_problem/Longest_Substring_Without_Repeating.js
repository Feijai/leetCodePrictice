// 找到字串中最長不重複的字
const lengthOfLongestSubstring = function (s) {
  var maxLength = 0;
  let left = 0;
  var charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    charSet.add(s[right]);
    console.log("===left===", left);
    console.log("===right===", right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  console.log(maxLength);
  return maxLength;
};

lengthOfLongestSubstring("abcaabbcc");
