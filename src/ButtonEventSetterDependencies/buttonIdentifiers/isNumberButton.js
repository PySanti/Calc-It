export function isNumberButton(buttonContent){
    let isNumber = isNaN(Number(buttonContent));
    return !(isNumber)
}

