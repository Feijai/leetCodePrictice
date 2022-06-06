// 在陣列中插入數, 使成排列的情況
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (target <= nums[left]) {
      return left;
    }
    if (target > nums[right]) {
      return right + 1;
    }
    left++;
    right--;
  }

  if (nums.length === 1) {
    return target > nums[0] ? 1 : 0;
  } else if (nums.length % 2 === 1) {
    return target > nums[Math.round(nums.length / 2) - 1]
      ? Math.round(nums.length / 2)
      : Math.round(nums.length / 2) - 1;
  } else {
    return nums.length / 2;
  }
};

console.log(searchInsert([1, 3, 5], 4));
