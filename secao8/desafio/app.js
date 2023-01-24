const usuario ={
    nome:'José',
    email:'jose@email.com',
    senha: 'josezaodazona123'
}

function escondeSenha(senha){
    let senhaUsu = '';
    for(let caractere = 0; caractere < senha.length; caractere++){
        senhaUsu += '*';
    }
    return senhaUsu
}

usuario.senha = escondeSenha(usuario.senha);
console.log(usuario)