// What is the difference between double equal and triple equal comparison operator. Explain with example.

double equal value checks but does not check data type and triple equal does checks both.data type and value

// double equal Ex
(i) - 12 == 12
true
12 == "12"
true
    (ii) - 12 === 12
true
12 === "12"
false

// What is the difference between if statement and ternary operator. Explain the difference with example.
if statement emphasises the branching first and what's to be done is secondary, and  ternary operator emphasises what's to be done over the selection of the values to do it with.

    // if statement Ex
    if(num > 3){ alert("it is a large number compare to 3"); }else { alert("it is a small number compare to 3"); }


// What are truthy and falsy values. List all the falsy values and 5 truthy values.

// falsy value
0
""
false
undefined
null
NaN

// truthy value
12
12.55
{ }
"shivam"
[]

// What are the main difference between a primitive and non-primitive values? Explain with example
4. Data types that are known as primitive values in JavaScript are numbers, strings, booleans, null, undefined.Objects such as functions and arrays are referred to as non - primitive values.The fundamental difference between primitives and non - primitives is that primitives are immutable and non - primitives are mutable.


// Go through this blog https://javascript.info/coding-style and re-format the code below.

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) { result *= x; }
    return result;
}

let x = prompt("x?", ''), n = prompt("n?", '')
if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else {
    alert(pow(x, n))
}
pow(5, 2);