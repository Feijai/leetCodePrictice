// 找到array中兩個相加符合target 的數
var twoSum = function (nums, target) {
  if (nums.length <= 1) {
    return false;
  }
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];

    if (cache[nums[i]] !== undefined) {
      return [cache[nums[i]], i];
    }

    cache[remaining] = i;
  }
};
