const nums = [10,20,30];
function average(nums){
    let total = 0
    for (let i=0; i<nums.length;i++){
        total += nums[i];      
    }
    const sum = total /nums.length;
    return sum;
}
const result = average(nums);