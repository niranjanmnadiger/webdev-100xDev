/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise(resolve => setTimeout(resolve,n));
    console.log("after n seconds", n);
    return p;
}

function callback(){
    console.log("exit");

}
wait(3000).then(callback);

module.exports = wait;
