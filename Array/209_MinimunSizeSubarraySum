/*
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//solution 1 暴力解
var minSubArrayLen = function(target, nums) {
    let result = nums.length + 1;
    let currLength = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                currLength = j - i + 1;
                result = Math.min(result, currLength);
                break;
            }
        }
    }
    if (result > nums.length) {
        result = 0;
    }
    return result;
};

//solution 2 
var minSubArrayLen = function(target, nums) {
    let result = nums.length + 1;
    let currLength = 0;
    let sum = 0;
    let start = 0;
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while (sum >= target) {
            currLength = end - start + 1;
            result = Math.min(result, currLength);
            sum = sum - nums[start]; //拿掉起點元素
            start++;                 //起點往後一位
        }
    }
    if (result > nums.length) {
        result = 0;
    }
    return result;
}