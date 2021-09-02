let marks = [1, 2, 3, 4, 5, 6];
marks.push("english");
console.log(marks[marks.length - 1]);
marks.pop();
console.log(marks[marks.length - 1]);

console.log(marks[0]);
marks.shift();
console.log(marks[0]);

console.log(marks[0]);
marks.unshift(50);
console.log(marks[0]);

console.log("index of 90: ", marks.indexOf(90));

console.log("splice");
console.log(marks[2]);
let removedItem = marks.splice(2, 2);
console.log(marks[2]);
console.log(removedItem);

console.log(marks.length);
let marks2 = [7, 8, 9];
let marks3 = marks.copyWithin(marks2);
console.log(marks.length);
