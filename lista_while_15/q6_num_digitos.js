/**Escreva um algoritmo para determinar o número de dígitos de um número informado. */

import { get_number,print } from "./io_utils.js"

function main(){
    //entrada
    const entrada_numero = get_number('Informe o número de entrada: ')

    let contador = 0
    //para o número não ser negativo
    let numero = Math.abs(entrada_numero)
//se o numero for 0
    if(numero === 0){
        contador++
    }
//se for menor que 1, no caso 0.alguma coisa
    if(numero < 1){
        contador++
    }
//multiplica o numero até ser maior que 1 para contar os digitos
    while(numero % 1 !== 0){
        numero = numero * 10
        print(numero)
    }
//vai dividindo por 10 para contar os digitos
    while(numero !== 0){
        numero = parseInt(numero / 10)
        contador++
    }

    print(`A quantidade de digitos do número [${entrada_numero}] é de [${contador}].`)
}

main()