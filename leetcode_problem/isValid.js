// 判斷是否有完整誇號 ()[]{}
var isValid = function (s) {
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        temp.push("(");
        break;
      case "{":
        temp.push("{");
        break;
      case "[":
        temp.push("[");
        break;
      case ")":
        if (temp.pop() == "(") break;
        else return false;
      case "}":
        if (temp.pop() == "{") break;
        else return false;
      case "]":
        if (temp.pop() == "[") break;
        else return false;
    }
  }
  return temp.length === 0;
};

isValid("({}){}[]");
