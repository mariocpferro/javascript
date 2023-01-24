let quantidade = parseInt(prompt('Quantos produtos foram comprados?'));
let soma;

while(quantidade > 0) {
    soma = quantidade*1.99
    console.log(quantidade + ' produtos custam R$ ' + soma)
}