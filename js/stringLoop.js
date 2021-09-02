let str = "this is sample string";
let str2 = "";
let i = 0;
while (i < str.length) {
    if (str[i] === " ") {
        str2 = str2 + "*";
    } else {
        str2 = str2 + str[i];
    }
    i += 1;
}

console.log(str2);
