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

        //resetar o display
        if (value === 'clear') {
            expressao = '';
            display.value = '';
        }

        //ligar calculadora
        else if (value === 'on') {
            expressao = '';
            display.value = 'Hello, Gatinha!';
        }

        //raiz quadrada
        else if (value === '√') {
            //verifica se o display contém um número válido
            if (display.value) {
            //converte para número
            const num = parseFloat(display.value); 

                if (!isNaN(num)) {
                    //calcula a raiz quadrada
                    const resultado = Math.sqrt(num).toFixed(4); 
                    //exibe o resultado
                    display.value = resultado;

                    //atualiza a expressão
                    expressao = resultado.toString(); 
                } else {
                    display.value = 'Erro'; 
                }
            }
        }

        //porcentagem
        else if (value === '%') {
            //converte para número
            const num = parseFloat(display.value);

            if(!isNaN(num)) {
                //calcula
                const resultado = num /100;
                //exibe
                display.value = resultado;
                expressao = resultado.toString();
            } else {
                display.value = 'Erro';
            }
        }

        //avalia a expressão e mostra o resultado
        else if (value === '=') {
            try {
                // Avaliar a expressão e mostrar o resultado
                display.value = eval(expressao);
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
