let pecas = ['peão' , 'torre' , 'cavalo' , 'bispo' , 'dama' , 'rei'];

const selecionaPeca = (pecas) => {
    return pecas[(Math.floor(Math.random()*pecas.length))].toLowerCase();
};

let pecaSelecionada = selecionaPeca(pecas);

console.log(pecaSelecionada);

const verificaPeca = (peca) => {
    switch (peca) {
        case 'peão':
            console.log('O peão se move 1 casa p/ frente.');
            break;

        case 'torre':
            console.log('A torre se move quantas casas quiser horizontalmente.');
            break;
        
        case 'cavalo':
            console.log('O cavalo se move em L.');
            break;
        
        case 'bispo':
            console.log('O bispo se move nas diagonais, quantas casas quiser.');
            break;

        case 'dama':
            console.log('A dama se move em todas as direções, quantas casas quiser.');
            break;

        case 'rei':
            console.log('O rei se move 1 casa em qualquer direção.');
            break;
        
        default:
            console.log('Isso não é uma peça de xadrez.')
    };   
};

verificaPeca(pecaSelecionada);