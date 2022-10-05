function getCount(str) {
    const array = str.split('');
    return array.filter( ele => 'aeiou'.indexOf(ele)!==-1 ).length
  }

console.log(getCount('abracadabra'))
