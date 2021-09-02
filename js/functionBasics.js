// function definition
function isEvenOdd(no) {
    let res = no % 2;

    if (res == 1) {
        console.log(no, " this is odd number");
    } else {
        console.log(no, "this is even number");
    }
}

// function calling
isEvenOdd(5);
isEvenOdd(10);
