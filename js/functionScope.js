let a = 10;

function display() {
    let a = 20;
    console.log("a in display: ", a);
    {
        console.log("a 2nd in the display: ", a);
    }
}

display();

console.log("a outside the display: ", a);
