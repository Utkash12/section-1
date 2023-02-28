let userDetail={
    name: 'Raju',
    email: 'raju@mail.com',
    age: 35,
    password: '3567754',
    'phone-no': '33377775551'
};
console.log(userDetail.email);
console.log(userDetail['age']);
console.log(userDetail.email ,userDetail.age);
console.log(userDetail['phone-no']);
userDetail.address ='Lucknow';
console.log(userDetail.address);
let [brand,model,price,color] =["samsung",'S23',79999,'black'];
let smartphone={
    brand,
    model,
    price,
    color,
}
console.log(smartphone);
smartphone.model='s23 pro',
smartphone.color=['red','black','blue'];
console.log(smartphone);
console.log(smartphone.color[1]);
smartphone.color[3]='pink';
console.log(smartphone.color);
smartphone.color.push('grey');
console.log(smartphone);