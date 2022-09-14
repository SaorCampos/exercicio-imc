const Resultado = document.querySelector('#resultado');
const Altura = document.querySelector('#altura');
const Peso = document.querySelector('#peso');
const calcular = () => {
    if (Altura.value != '' && Peso.value != '') {
        const IMC = (Peso.value / (Altura.value * Altura.value)).toFixed(2)
        let classicacao = ''
        if (IMC <19) {
            classicacao = 'Abaixo do peso'
        } else if (IMC >= 19 && IMC <25) {
            classicacao = 'Peso Ideal'
        } else if (IMC >= 25 && IMC < 30) {
            classicacao = 'Sobrepeso'
        } else if (IMC >=30 && IMC < 35) {
            classicacao = 'Obesidade Grau I'
        } else if (IMC >= 35 && IMC < 40) {
            classicacao = 'Obesidade Grau II(Severa)'
        }else if (IMC >=40) {
            classicacao = 'Obessidade Grau III(Mórbida)'
        }
        resultado.innerHTML = `IMC: ${IMC} (${classicacao})`
    } else {
        resultado.innerHTML = 'Preencha os Dados'
    }
}