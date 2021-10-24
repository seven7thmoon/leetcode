/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let middle = (left + right) >> 1;//這裡寫成(left + right)/2會失敗
        if (nums[middle] > target) {
            right = middle - 1;
        }else if (nums[middle] < target) {
            left = middle + 1;
        }else{
            return middle;
        }
    }
    return -1;
};