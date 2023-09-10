function addition(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function calculate(a,b,operation){
    return operation(a,b);
}
console.log(calculate(2,3,function (a,b){
    return a-b;
}));