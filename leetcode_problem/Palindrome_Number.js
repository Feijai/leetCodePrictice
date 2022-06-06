// 判斷數字是不是 12321
var isPalindrome = function (str) {
  if (str < 0) {
    return false;
  }
  str = new String(str);
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};
