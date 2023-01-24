let quantidade = 0;

function perguntar (pergunta) {
    question = prompt(pergunta);
    if (question === 'sim'){
        quantidade += 1;
    }
}

perguntar('Telefonou para a vítima?');
perguntar('Esteve no local da vítima?');
perguntar('Mora pertor da vítima?');
perguntar('Devia para a vítima?');
perguntar('Já trabalhou com a vítima?');

if (quantidade === 0 || quantidade === 1) {
    console.log('Ele é inocente');
} else if (quantidade === 2 ) {
    console.log('Ele é suspeito')
} else if (quantidade === 3 || quantiade === 4) {
    console.log('Ele é cúmplice')
} else{
    console.log('Ele é assassino')
}