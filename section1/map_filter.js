const nums = [3, 7, 9,4,6,1,2];
const nums2 = [nums.length]
// 
for(let i = 0; i<nums.length; i++){
    nums2[i] = nums[i]*nums[i]; 
}

console.log(nums2);

//map method

const result = nums.map(
    (n) => {
        return n**2;
    }
);

console.log(result);


const prices = ['$567.23', '$21874.989', '$888.90', '$7257.2482'];

const result2 = prices.map(
    (n) => {
       
       return parseInt
       (n.slice(1)) ;
    }
);

console.log(result2);

const discount = result2.map((p) => {
    return parseInt(p*.9);
})

console.log(discount)