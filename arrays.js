const myarr= ['apple',345,56.54,true, Math];
//console.log(myarr);



//indexing
const movies=['Drishym', 'Don', 'Avengers', 'Ironman', 'Avatar','Flash'];
console.log(movies);
console.log(movies[3]);
console.log(movies.length);
console.log(movies[movies.length-2]);
console.log(movies.at(-3));
console.log(movies.at(-1));


//slicing
console.log(movies.slice(2,5));
console.log(movies.slice(2,-1));
console.log(movies.slice(2));
console.log(movies.slice(1,20));


//adding elements
movies.push('Pathaan'); //adds element to the end of the array
console.log(movies);
movies.unshift('Dhol'); //adds element to the start of the array
console.log(['KGF',...movies,'KGF']);
console.log([...movies.slice(0,2),'Don 2', ...movies.slice(3)]);

//removing elements
movies.pop()//removes the element from the end of the array
movies.shift()// removes element from the start
console.log(movies);
movies.splice(3,2);//first is index and second is no. of elements to be deleted
console.log(movies);

//removing specific element
console.log(movies.indexof('Avengers'));
movies.splice(movies.indexOf('Avengers'),1);
console.log(movies);