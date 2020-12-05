console.log('test')
setTimeout(myCallback, 5000);
console.log("I'm not waiting for the callback"); 
function myCallback() {
console.log("I'm a callback"); 
}
console.log("I'm not waiting for the callback, either");