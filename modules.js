const prompt = require('prompt-sync')();
const atividades = [];

const sub = () => {
    let atividade = {
        dia: undefined,
        descricao: []
    };

    atividade.dia = prompt('Informe o dia, mês e ano que deseja guardar: ');
    atividade.descricao.push(prompt('Informe o que fez nesse dia: '));
    while (true) {
        let resposta = prompt('O que mais fez nesse dia? Digite "fim" para finalizar: ');
        if (resposta == 'fim')
            break;
        atividade.descricao.push(resposta);
    }
    return atividade;
};

const registro = () => {

    let atividade = sub();
    atividades.push(atividade)
    console.log('Registro adicionado com sucesso.');
    console.log('Escolha uma nova opção:');
};

const atualizar = () => {
    listar();

    let i = prompt('Escolha pelo índice qual registro deseja atualizar: ');
    let att = sub();
    atividades[--i] = att;
    console.log('Atualizado com sucesso.');
};

const remover = () => {
    if (!atividades) {
        console.log('Não há nenhum registro.');
    } else {
        atividades.forEach(function (atividade, index) {
            console.log(index + 1, atividade);
        });
        let rm = prompt('Escolha pelo índice qual registro deseja remover: ');
        atividades.splice(rm - 1, 1);
        console.log('Registro removido com sucesso.');
        console.log('Escolha uma nova opção:');
    }
};

const listar = () => {
    console.log('Aqui está a lista de todas as atividades registradas:');
    atividades.forEach((atividade, index) => {
        console.log(`${index + 1}. ${atividade.dia}: `);
        atividade.descricao.forEach(descricao => console.log(`- ${descricao}`));
    });
    console.log('Escolha uma nova opção:');
};

module.exports = {
    registro,
    atualizar,
    remover,
    listar
};