let number = -280.123;
let number2 = 123.45
let number3 = 123
let number4=-123
function getDigitsSum(number) {
    if (number < 0) {
        number = Math.ceil(number);
        number = number * (-1);
    } else {
        number = Math.floor(number);
    }
    let res = 0;
    do {
        res = res + Math.floor(number % 10);
        number = Math.floor(number / 10);

    } while (number > 0)
    return res;
}
console.log(getDigitsSum(number));//expected return 10
console.log(getDigitsSum(number2));//expected return 6
console.log(getDigitsSum(number3));//expected return 6
let expr = "9000 / ((10 + 20) ** 2";
let expr2 = ("9 + 100 / 2");
function computeExpression(expressionStr) {
    let res;
    try{
        res = eval(expressionStr);

    }catch(e){
        res="Wrong expression";
    }
    return res;
}
console.log(computeExpression(expr));//expected return 10
console.log(computeExpression(expr2));//expected return 59

function printAnanas() {
    let c;
    let a = "A";
    let s = "S";
    let res = a + c / 100 + a + s;
    console.log(res);
    
}
console.log(printAnanas());//expected return ANaNAS


function reverse(number) {
    let res = "";
    if (number < 0) {
        res = "-";
        number = Math.ceil(number);
        number = number * (-1);
    } else {
        number = Math.floor(number);
    }
        do {
            res = res + Math.floor(number % 10);
            number = Math.floor(number / 10);

        } while (number > 0)
        return res;
    }
    console.log(reverse(number));//expected return -082
    console.log(reverse(number2));//expected return 321
    console.log(reverse(number4));//expected return -321

    let n=4;
    let count=0;
    while(n--){
        count++;
    }
    let d;









