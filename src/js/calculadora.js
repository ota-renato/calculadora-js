let Calculadora = {

    ADICAO: '+',
    SUBTRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO: '*',

    adicionar: (num1, num2) => {
        return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
    },
    subtrair: (num1, num2) => {
        return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
    },
    dividir: (num1, num2) => {
        if(num2 == 0) {
            return 'Erro';
        }
        return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
    },
    multiplicar: (num1, num2) => {
        return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO);
    },

    calcular: (num1, num2, operacao) => {

        let resultado = 0;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if(isNaN(num1) || isNaN(num2)) {
            return 0;
        }

        switch(operacao) {
            case Calculadora.ADICAO:
                this.resultado = num1 + num2;
                break;
            case Calculadora.SUBTRACAO:
                this.resultado = num1 - num2;
                break;
            case Calculadora.DIVISAO:
                this.resultado = num1 / num2;
                break;
            case Calculadora.MULTIPLICACAO:
                this.resultado = num1 * num2;
                break;
        }

        return this.resultado;
    }
};

// usado  na função 'require' do NodeJS
if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}