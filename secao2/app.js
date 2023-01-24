/*
Sistema de dados bancários
*/

let nome = 'Manuel'
let sobrenome = 'Silva'
let idade = 25
const numCliente = 781301
let valorEmprestimo = 150000
let taxaDeJuros = 10;
let ehBomPagador = true;

console.log('Boa tarde Sr. '+ nome + ' ' + sobrenome + ' sua idade é ' + idade)

/*if (ehBomPagador){
    console.log('O cliente '+nome+' é um bom pagador!')
}else {
    console.log('O cliente '+nome+' não é bom pagador!')
}*/

console.log('O cliente ' + nome + (ehBomPagador ? ' é bom pagador!' : 'não é bom pagador!'));