let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let b = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
];

let c = [];

for (let i = 0; i < a.length; i += 1) {
    c.push([]);
    for (let j = 0; j < a[i].length; j += 1) {
        c[i].push(a[i][j] - b[i][j]);
    }
}

for (let k = 0; k < c.length; k += 1) {
    console.log(c[k]);
}
