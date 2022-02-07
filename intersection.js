function counterArray(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }
  //   console.log(counter);
  for (const property of Object.keys(counter)) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  console.log(result);
}

counterArray([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 3, 6, 4, 1, 0]);
