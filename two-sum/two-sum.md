
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


为什么使用 hash-table 来解决
因为 n^2 的复杂度是由嵌套循环导致的, 嵌套循环的目的是为了查找, 列表查找复杂度 n, hash-table 复杂度 1