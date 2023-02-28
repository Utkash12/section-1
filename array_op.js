let nums=[31,654,350,386,573,76,23];
for(let i=0; i<nums.length;i++){
    if(nums[i]%2 !=0){
        console.log(nums[i]);
    }
}

let newArr= [];
for(let n of nums){
    if (n%2!=0) {
        console.log(n);
        newArr.push(n);
    }
}
console.log(newArr);

let res= nums.filter( (n) => { return n%2!=0});
console.log(res);

let prices= ['₹384/-', '₹98357/-','₹865/-', '₹3546'];
let numPrices =prices.map( (p) => { return parseInt( p.slice(1,-2))});
console.log(numPrices);

