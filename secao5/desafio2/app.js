let temp;
let soma = 0;
let quantidade = 0;

do {
    temp = parseInt(prompt('Qual é a temperatura?'));
    soma += temp;
    quantidade = ++quantidade;
}while (temp != 0)
console.log(soma/(quantidade-1))

