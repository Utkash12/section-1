for(let i=0;i<=10;i++){
    console.log(i);
}
for(let i=50;i<=80;i++){
    if(i%7==0){
    console.log(i);
    }
}



myname = "Anonymous";
for(let d of myname){
    console.log(d);
}
console.log("vvvvvvvvvvvvvvvvvvvvvvvv");
for(let c of myname){
    if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'){
        console.log(c);
    }
}
console.log('-------');
for(let v of 'aeiou'){
    if(myname.includes(v)){
        console.log(v);
    }
}