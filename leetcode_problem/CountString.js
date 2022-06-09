
function count(str){
    let result = '';
    let maxCount = 0;
    let items = new Set(str.split(''));
    for (let i of items) {
        console.log('==i==', i)
      let count_i = str.split(i).length;
      console.log('===count_i===', count_i)
      if (count_i > maxCount) {
        result = i;
        maxCount = count_i
        }
      else if (count_i == maxCount) {
        result += i;
        }
    }
    if (result.length > 1) {return result.split('')}
    else {return result}
  }
  

  console.log('....', count('aaabbbbbcc'))