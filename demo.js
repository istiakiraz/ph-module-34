function a(){
    b()
    console.log("a");
}

function b(){
    c()
    console.log("b");

}

console.log("hello");

function c(){
    d()
    console.log('c');
}

function d(){
    console.log('d');
}
a()



