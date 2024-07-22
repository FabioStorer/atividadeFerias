const prompt = require('prompt-sync')();
const atividades = [];
let data = {
    dataAtividade: '',
    atividade: ''
};

function modelo() {
    let atividade = {
        dia: '',
        descricao: ''
    };
};

function registro() {
    data.dataAtividade = prompt('Informe o dia, mês e ano que deseja guardar:');
    data.atividade = prompt('Informe o que fez nesse dia:');
    atividades.push(data);
    data = {
        dataAtividade: '',
        atividade: ''
    };
    console.log('Registro adicionado com sucesso.');
    console.log('Escolha uma nova opção:');
};

function atualizar() {
    atividades.forEach(function (atividade, index) {
        console.log(index + 1, atividade);
    });
    let att = prompt('Escolha pelo índice qual registro deseja atualizar:');
    console.log(atividades[att - 1]);
};

function remover() {
    atividades.forEach(function (atividade, index) {
        console.log(index + 1, atividade);
    });
    let rm = prompt('Escolha pelo índice qual registro deseja remover:');
    atividades.splice(rm - 1, 1);
    console.log('Registro removido com sucesso.');
    console.log('Escolha uma nova opção:');
};

function listar() {
    console.log('Aqui está a lista de todas as atividades registradas:');
    atividades.forEach(function (atividade) {
        console.log(atividade);
    });
    console.log('Escolha uma nova opção:');
};

module.exports = {
    registro,
    atualizar,
    remover,
    listar
};