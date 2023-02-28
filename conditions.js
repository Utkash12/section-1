num=36;
if(num%2==0){
    console.log('even number');
    msg="This is global";
    var x='This is new';
    //let y='block scoped';
    //const pi=3.14;
}else{
    console.log('odd number');
}


console.log(msg);
console.log(x);
//console.log(y);
//console.log(pi);
let marks=980;
if(marks>90){
    console.log('Grade A');
}else if(marks>70){
    console.log('Grade B');
}else if(marks>50){
    console.log('Grade C');
}else if(marks>30){
    console.log('Grade D');
}else if(marks<=30){
    console.log('Fail');
}


if (marks > 90 && marks<=100) {
    console.log('Grade A');
} else if (marks > 70 && marks<=90) {
    console.log('Grade B');
} else if (marks > 50 && marks<=70) {
    console.log('Grade C');
} else if (marks > 30 && marks<=50) {
    console.log('Grade D');
} else if (marks <= 30 && marks>=0) {
    console.log('Fail');
}else{
    console.log('invalid marks');
}