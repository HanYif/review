

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


/** https://leetcode.com/problems/missing-number/description/
 * @param {number[]} nums
 * @return {number}
 * 使用异或操作，性质：a ^ b ^ b = a
 * 这里的数组的下标index和value可以相互抵消
 */
var missingNumber = function(nums) {
  let xor = 0, i
  for (i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i]
  }
  return xor ^ i
};

/** https://leetcode.com/problems/find-the-duplicate-number/description/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  
};

/** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} nums
 * @return {number}
 */
// 超时
var maxProfit = function(prices) {
  let result = 0
  for (let i = 0, len = prices.length; i < len - 1; i++) {
    let pre = prices[i]
    for (let j = i + 1; j < len; j++) {
      let latter = prices[j]
      let temp = latter - pre
      if (temp > result) {
        result = temp
      }
    }
  }
  return result
};

// Kadane's Algorithm
var maxProfit2 = function(prices) {
  let maxCur = 0, maxResult = 0
  for (let i = 1, len = prices.length; i < len; i++) {
    maxCur = Math.max(0, maxCur += prices[i] - prices[i - 1]) // maxCur记录趋势
    maxResult = Math.max(maxResult, maxCur)
  }
  return maxResult
};

var uniquePaths = function(m, n) {
  let a = []
  for (let i = 0; i < m; i++) {
    a[i] = []
    a[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    a[0][j] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      a[i][j] = a[i - 1][j] + a[i][j - 1]
    }
  }
  return a[m - 1][n - 1]
};

/** https://leetcode.com/problems/subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  
};

/** for test
 * @param ...
 * @return ...
 */
(function test () {
  let result = subsets([1, 2, 3]);
  console.log('result', result)
})();

