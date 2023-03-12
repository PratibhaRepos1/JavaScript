
function singleNumber(nums) {
nums.sort();
    for(let i=0; i< nums.length; i+= 2) {
        console.log(i);
        if(nums[i] !== nums[i+1]) {
            return nums[i];
        }
    }

}
const nums = [13, 11, 12,12,11];
console.log(singleNumber(nums));
