
const { ensure, log } = require('../utils');
const bruteForce = require('./brute-force');
const twoPassHash = require('./two-pass-hash-table');
const onePassHash = require('./one-pass-hash-table');

const test = () => {
    const nums1 = [2, 7, 11, 15];
    const target1 = 9;

    const result1 = bruteForce(nums1, target1);
    const condition1 = (result1[0] + result1[1]) === target1;
    ensure(condition1, 'brute force')

    const result2 = twoPassHash(nums1, target1);
    const condition2 = (result2[0] + result2[1]) === target1;
    ensure(condition2, 'two pass hash table')

    log('result2', result2)


    const result3 = onePassHash(nums1, target1);
    ensure((result3[0] + result3[1]) === target1, 'one pass hash table')

    log('result3', result3)

}

test();