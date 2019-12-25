/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 使用 hashTable 进行 complement 的查询
var twoSum = function(nums, target) {
    const obj = {};
    for(let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i;
    }

    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (obj[complement] !== undefined && obj[complement] !== i) {
            return [nums[i], complement];
        }
    }
};

// O(n)

module.exports = twoSum;