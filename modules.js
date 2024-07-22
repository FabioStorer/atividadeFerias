const prompt = require('prompt-sync')();
const atividades = [];
let data = {
    dataAtividade: '',
    atividade: ''
};

function registro() {
    data.dataAtividade = prompt('Informe o dia, mês e ano que deseja guardar:');
    data.atividade = prompt('Informe o que fez nesse dia:');
    atividades.push(data);
    data = {
        dataAtividade: '',
        atividade: ''
    };
};

function atualizar() {
    atividades.forEach(function(atividade) {
    console.log(atividades[i]);
    let att = prompt('Qual das atividades deseja atualizar?');
    console.log(atividades[att]);
    att = prompt('Qual dado deseja atualizar?');
    });
};

function remover() {

};

function listar() {
    console.log('Aqui está a lista de todas as atividades registradas:');
    atividades.forEach(function(atvdd) {
        console.log(atividades[i]);
    })

};

module.exports = {
    registro,
    atualizar,
    remover,
    listar
};