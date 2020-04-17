//function inside a function
function firstFunction() {
    function secondFunction(){
        console.log('10');
    }
    secondFunction();
}

firstFunction();

//Recursive Functions
function recursiveFunction()
{
    recursiveFunction();
}
recursiveFunction();

//using setTimeout
console.log("first");
setTimeout(()=>{
    console.log('second');
}, 2000);
console.log("third");

/*
----Output----
first
third
second
 */