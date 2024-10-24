// Selecionar o display da calculadora
const display = document.querySelector('.display');

// Selecionar todos os botões
const buttons = document.querySelectorAll('.btn');

// Inicializa uma string vazia para armazenar a expressão
let expressao = '';

// Adicionar um listener de clique para cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        //apagar digito
        if (value === 'clear') {
            apagarDigito();
        }

        //ligar calculadora
        else if (value === 'on') {
            expressao = '';
            display.value = 'Hello, Gatinha!';
        }

        //raiz quadrada
        else if (value === '√') {
            raizQuadrada();
        }

        //porcentagem
        else if (value === '%') {
            porcentagem();
        }

        //avalia a expressão e mostra o resultado
        else if (value === '=') {
            try {
                // Avaliar a expressão e mostrar o resultado
                display.value = eval(expressao);
                expressao = '';
            } catch (error) {
                display.value = 'Erro'; // Em caso de erro
            }
        }
        
        //atualiza a expressão com o valor do botão
        else {
            expressao += value;
            display.value = expressao;
        }

    }); 
});
