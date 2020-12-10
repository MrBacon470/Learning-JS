// This is a 'setInterval' function. It allows for an actions, or several actions to take place over a constant interval. The first argument is a function of some kind, and the second is the interval in ms (e.g 1 second = 1000ms). I use the arrow notation for functions in JavaScript as it looks cleaner and has other special purposes later down the line.
setInterval(() => {
    // This is the function scope.
}, 1000); // This argument is the interval. Whatever is in the above function scope will execute every second, or 1000ms. This can be changed to any interval you want.

// I would recommend setting a constant variable to the 'setInterval' function as the contents of the interval likely won't be changing over time, and you are able to use the developer console in the browser to execute the setInterval method once, and once only, if a variable is set to it. Below is an example of setting a variable to a setInterval method.
const updateLoop = setInterval(() => {
    // We can now execute the code inside this function scope exactly once using updateLoop() in the browser's developer console. This can be good for debugging etc.
}, 1000);

// A cleaner way to have setInterval is to have them on one line. The way to achieve this is to have a separate function which is then called inside the 'setInterval' functions first parameter. An example is shown below.
const updateGame = () => {
    // Code that updates variables/the display.
}

const updateLoop = setInterval(updateGame, 1000);
// As you can see, we call the updateGame function in the first parameter of the 'setInterval' function. This makes the function cleaner and easier to read.