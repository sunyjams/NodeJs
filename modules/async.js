// function asyncFunction(callback) {
//     setTimeout(callback, 200);
// }

// var color = 'blue';

// asyncFunction(function () {
//     console.log('The color is ' + color);
// });

// color = 'green';

var color = 'blue';

(function (color) {
    setTimeout(function () {
        console.log('The color is ' + color);
    }, 200);
})(color);

color = 'green';