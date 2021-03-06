/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//solution 1 暴力解 把所有元素前移再縮短長度
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            for (let j = i + 1; j < nums.length; j++) {
                nums[j - 1] = nums[j]; 
            }
            i--;
            nums.length--;
        }
    }
    return nums.length;//這裡有沒有return 答案都會一樣因為原數組已經被改變長度了
};

//solution 2 雙指針 
var removeElement = function(nums, val) {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] != val) {
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;//這裡沒return的話 會超出題目需要的長度
}

//solution 3 js函數splice()
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        }
    }
}