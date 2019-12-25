/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 使用 hashTable 进行 complement 的查询
 // 符合条件的数一定是成对的, 在第二数是捕获
 
 var twoSum = function(nums, target) {
    const obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (obj[complement] !== undefined && obj[complement] !== i) {
            return [nums[i], complement];
        }
        obj[nums[i]] = i;
    }
};

// O(n)

module.exports = twoSum;