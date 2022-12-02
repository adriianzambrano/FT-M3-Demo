const moment = require('moment');
console.log(moment().format("MMMM d9 YYYY"))

console.log("Prueba #1")

//1.0.0
function suma(a, b){
    console.log(a + b)
}
suma(4,5)

//1.0.1
function suma2(a, b){
    return a + b
}

console.log(suma2(5,5))

//1.1.0
function suma3(a, b = 0){
    return a + b
}
console.log(suma3(9,8))
console.log(suma3(8))

function suma4(type, a, b = 0){
    if(type === "sum") return a + b;
    if(type === "mul") return a * b;
}

console.log(suma4("sum",2 ,8))
console.log(suma4("mul",3 ,4))