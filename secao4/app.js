let cor1 = 7;
let cor2 = 5;
let cor3 = 4;

/* TERNÁRIO

console.log(cor1 < cor2 ? (cor1 < cor3 ? 'O corredor 1 venceu' : 'O corredor 3 venceu') : (cor2 < cor3 ? 'O corredor 2 venceu!' : 'O corredor 3 venceu')); */

if(cor1 < cor2 && cor1 < cor3){
    console.log('O corredor 1 venceu!')
} else if (cor2 < cor1 && cor2 < cor3){
    console.log('O corredor 2 venceu!')
} else {
    console.log('O corredor 3 venceu!')
}
