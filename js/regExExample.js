// sample string
var str = "This is sample#@@2 23 string";

// regular expression
const regex = /[A-Z|a-z|0-9]+/g;

const found = str.match(regex);

console.log(found);
