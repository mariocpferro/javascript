const listaFilmes = document.querySelector('#listaFilmes');

const filmes = [
    {nome:'Uma linda mulher', genero:'Romance'},
    {nome:'Fast and Furious', genero:'Ação'},
    {nome:'IT', genero:'Terror'},
    {nome:'O lobo de Wall Street', genero:'Finanças'},
    {nome:'Até que a sorte nos separe', genero:'Comédia'}
]

const criaElementosUi = function() {
    let aux = '';
    filmes.forEach((filmes) => {
        aux += `<li> Nome: ${filmes.nome} Gênero: ${filmes.genero}`
    })
    listaFilmes.innerHTML = aux;
}

function exibeFilmes(){
    setTimeout(criaElementosUi, 2000);
}

function adicionaFilme(filme){
    const promise = (resolve, reject) => {
        setTimeout(() => {
            if(filme.nome === ''){
                reject(new Error('Nome inválido!'))
            } else{
                filmes.push(filme);
                resolve();
            }
        }, 1000);
    }
    return new Promise(promise);
}

    adicionaFilme({nome: 'O contratempo', genero: 'Suspense'})
    .then(() => {
        return adicionaFilme({nome: 'Velozes e Furiosos 1', genero:'Ação'})
    })
    .then(() => {
        return adicionaFilme({nome: 'Velozes e Furiosos 2', genero:'Ação'})
    })
    .then(() => {
        return adicionaFilme({nome: 'Velozes e Furiosos 3', genero:'Ação'})
    })
    .then(() => {
        return adicionaFilme({nome: 'Velozes e Furiosos 4', genero:'Ação'})
    })
    .then(() => {
        return adicionaFilme({nome:'', genero:'Ação'})
    })
    .then(exibeFilmes);