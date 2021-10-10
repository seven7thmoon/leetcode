/*
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    if (n == 0){return 0;}
        
    //tempMoney為離開當前屋子能拿到的錢的總和
    let tempMoney = [];
    tempMoney[0] =nums[0];
    for (let i = 1; i < n; i++) {
        if (i < 2){
            tempMoney[i] = Math.max(nums[i], tempMoney[i-1]);
        }else{
            //前前屋子的總和加上目前的屋子錢 跟 到前一間屋子為止的總和 比大小
            tempMoney[i] = Math.max(nums[i]+tempMoney[i-2], tempMoney[i-1]);
        }
    }
    return tempMoney[n-1];
};