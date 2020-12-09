//Array section
console.log("Array section\n");

let arr = [2, 4, 11];
let obj = {
    "One": 5,
    "Two": 1,
    "Four": 27
}
console.log("Sample array");
console.table(arr);

console.log("Sample object");
console.table(obj);

console.log("For loop");
console.time("ForLoopBenchmark");
for(i=0;i<arr.length;i++){ // loop until i is larger than length of arr
    console.log(arr[i]); //log array element at index i
}
console.timeLog("ForLoopBenchmark");

console.log("For-of loop");
console.time("ForOfLoopBenchmark");
for(let element of arr) { // iterate over array arr
    console.log(element); // log element iterated over
}
console.timeLog("ForOfLoopBenchmark");

console.log("For-in loop");
console.time("ForInLoopBenchmark");
for(let element in obj){ // iterate over object obj indexes
    console.log(obj[element]); // log element at iterated object index element
}
console.timeLog("ForInLoopBenchmark");

console.log("Foreach loop");
console.time("ForeachLoopBenchmark");
arr.forEach(element => console.log(element)); // for every element, log the element
console.timeLog("ForeachLoopBenchmark");