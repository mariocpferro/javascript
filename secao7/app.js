const frutas = ['Abacaxi', 'Banana', 'Pêssego', 'Uva', 'Morango'];

let indice = Math.floor(Math.random() *5);

console.log(frutas[indice]);

frutas.unshift('Melancia');
console.table(frutas);