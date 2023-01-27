const main = (nums,target) => {
    for(let index =0;index <nums.length;index++){
        const diff = target - nums[index];
        const diffIndex = nums.indexOf(diff);
        if(diffIndex !== -1 && diffIndex!==index){
            return[nums[index], nums[diffIndex]];
        }
    }
}
const res = main([10,3,5,7], 17)
console.log(res)