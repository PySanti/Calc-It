export function isNumberButton(button){
    let isNumber = isNaN(Number(button.innerText));
    return !(isNumber)
}

