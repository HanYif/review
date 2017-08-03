

/** 数组查重
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  var nSet = new Set(nums);
  return nSet.size < nums.length;
};

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  let temp = nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * @param {array} nums
 * @return {array}
 */
function findMax3Items(nums) {
  let temp = nums.sort((a, b) => a < b);
  return Math.max(nums[0] * nums[1] * nums[2], nums[nums.length - 1], nums[nums.length - 2], nums[0]);
}

/** for test
 * @param ...
 * @return ...
 */
(function test () {
  findMax3Items([2, 8, 3, 4]);
})();