// Your code here
function wrapAdjective(string="*"){
    return function(param="special"){
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {
    'add':function(num1,num2){return num1 + num2},
    'subtract':function(num1,num2){return num1 - num2},
    'multiply':function(num1,num2){return num1 * num2},
    'divide':function(num1,num2){return num1 / num2}
};

function actionApplyer(int,fnArray){
    if (fnArray.length === 0){
        return int
    }else{


     //  return fnArray[2](fnArray[1](fnArray[0](int)))

        return fnArray.reduce(function(prevFnValue,currentFn){return currentFn(prevFnValue)},13)
    };
};