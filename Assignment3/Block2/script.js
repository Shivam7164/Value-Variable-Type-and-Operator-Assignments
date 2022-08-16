// true && true; //output
true 

// true && false;
false

// false && true;
false

// false && false;
false

// "foo" && "bar";
"bar" true

// "bar" && "foo";
"foo" true

// "foo" && "";
"" true

// "" && "foo";
"foo" true 

// " " && "John" && "" && false;
""

// false && "Hey" && undefined;
false

// "undefined" && false && 42;
"undefined"

// Logical OR operation
// true || true;
true

// true || false;
true

// false || true;
true

// false || false;
false

// "foo" || "bar";
"foo"

// "bar" || "foo";
"bar"

// "foo" || "";
"foo"

// "" || "foo";
"foo"

// " " || "John" || "" || false;
" "

// false || "Hey" || undefined;
"Hey"

// "undefined" || false || 42;
"undefined"

// Write the output of the code next to each line:
// let a = 5,
//   b = 10;
// (a != b) && (a < b); // output
true

// (a > b) || (a == b);
false

// (a < b) || (a == b);
true

// !(a < b);
false

// !(a > b);
true

// !!a;
true

// !!(a>b);
false