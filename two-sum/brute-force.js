/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; i++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]]
            }
        }
    }
};

// O(n^2)

module.exports = twoSum;