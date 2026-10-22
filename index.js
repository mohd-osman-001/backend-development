const num1 = Number(process.argv[2]);
const operator = String(process.argv[3]);
const num2 = Number(process.argv[4]);

const simplCalculator = ()=>{
    if(operator == "+"){
        console.log(num1+num2)
    }
    else if(operator == "*"){
        console.log(num1 * num2)
    }
    else if(operator == "-"){
        console.log(num1 - num2)
    }
    else{
        console.log("wrong operator provided")
    }
}
simplCalculator()