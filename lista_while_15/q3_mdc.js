import { get_number_inteiro , print} from "./io_utils.js"

//usando o algoritmo de euclides
function MDC_Euclides(Valor_1,Valor_2){
    let Guardar_Valor = 0

    while(Valor_2 !== 0){

        Guardar_Valor = Valor_2
        Valor_2 = Valor_1 % Valor_2
        Valor_1 = Guardar_Valor
    
    }

    return Valor_1
}


function main(){
//entrada de valores
    const Primeiro_Valor = get_number_inteiro('Informe o primeiro valor: ')
    const Segundo_Valor = get_number_inteiro('Informe o segundo valor: ')

    const Resultado_Do_MDC = MDC_Euclides(Primeiro_Valor,Segundo_Valor)

    print(`O MDC de [${Primeiro_Valor}] e [${Segundo_Valor}] é o [${Resultado_Do_MDC}]`)

}

main()
