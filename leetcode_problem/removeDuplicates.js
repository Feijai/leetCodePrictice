// 透過刪除找出不重複的array
var removeDuplicates = function (nums) {
  let l = 0;
  for (let r = 1; r < nums.length; r++) {
    if (nums[l] !== nums[r]) {
      nums[l + 1] = nums[r];
      l++;
    }
  }
  nums.splice(l + 1, nums.length);
  console.log(nums);
  return nums.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
