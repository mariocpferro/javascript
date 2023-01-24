function relatorio(alunos) {
    let contadorAprovados = 0;
    let contadorReprovados = 0;
    for (const nota of alunos) {
        if (nota > 7) {
            contadorAprovados += 1;
        } else {
            contadorReprovados += 1;
        }
    }

    return `Aprovados: ${contadorAprovados} Reprovados: ${contadorReprovados}`
}

console.log(relatorio([8,9,4,5,3,10,8,7,5,1,9,6,4,3,1,7,8,9,8,9,8,9]));
