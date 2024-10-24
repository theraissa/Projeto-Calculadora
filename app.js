//FUNÇÕES AFINS
function apagarDigito() {
    // Verificar se há algo no display
    if (display.value.length > 0) {
        // Remover o último caractere do display
        display.value = display.value.slice(0, -1);
        
        // Também remove o último caractere da expressão, se houver
        if (expressao.length > 0) {
            expressao = expressao.slice(0, -1); 
        }

        // Se a expressão estiver vazia após apagar, limpa completamente o display
        if (expressao === '') {
            display.value = ''; // Limpa o display
        }
    } 
}


//FUNÇÕES PARA AS OPERAÇÕES
function raizQuadrada() {
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

function porcentagem() {
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
