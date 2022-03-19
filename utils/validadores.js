const validarNome = (nome) => {
    return nome?.toString().length > 2;
};

const validarEmail = (email) => {
    const emailStr = email?.toString();
    const emailValidado = emailStr.length >= 5 && emailStr.includes('@') && email.includes('.');
    
    return emailValidado;
};

const validarSenha = (senha) => {
    return senha?.toString().length > 3;
};

const validarConfirmacaoDeSenha = (senha, confirmacao) => {
    return validarSenha(senha) && senha === confirmacao;
};

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmacaoDeSenha
};