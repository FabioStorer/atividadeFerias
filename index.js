const prompt = require('prompt-sync')();
const funcao = require('./modules.js');

console.log(`Olá. Vou guardar para você todas as atividades que você realizou nas férias.
Vou listar algumas opções para você. Vamos começar?`);

while (true) {

    console.log(`1. Adicionar atividade.
2. Atualizar atividade.
3. Remover atividade.
4. Listar todas as atividades guardadas.
5. Finalizar a sessão.`);

    let opcao = Number(prompt());

    switch (opcao) {
        case 1:
            funcao.registro();
            break;

        case 2:
            funcao.atualizar();
            break;

        case 3:
            funcao.remover();
            break;

        case 4:
            funcao.listar();
            break;

        case 5:
            process.exit();
            break;

        default:
            console.log('Opção inválida.');
            break;
    };
};