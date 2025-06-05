// const prompt = require('prompt-sync')();
// const name = prompt("what is your name? ");
// console.log("hello,"+ name + "!" );




function sq(x){
    let ans = 0;
    ans = x*x;
    return ans;
}
console.log("the answer is:" + sq(12));


function greet (name,cb){
    console.log("hello,"+ name +"!");
    cb();
}
function gdb() {
    console.log("goodbye!");
}
greet("tithi", gdb);