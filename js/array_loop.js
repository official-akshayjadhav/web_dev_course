let a = [1, 2, 3, 4, 5];
let len = a.length;
let i = 0;
let str = "";
while (i < len) {
    str = str + a[i];
    if (i < len - 1) {
        str = str + ", ";
    }
    i = i + 1;
}
console.log();
