const car = {
    color: "white",
    seats_color: {
        front: "white",
        back: "black",
    },
    wheelAirPressure: [10, 20, 30, 40],

    start: function (time = 0) {
        console.log("car will start in ", time, " minutes");
    },

};

console.log(car.color);
