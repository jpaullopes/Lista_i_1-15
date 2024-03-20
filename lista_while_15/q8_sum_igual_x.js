import { print,get_number} from "./io_utils.js"

function main(){
//entrada de dados
    const numero_x = get_number('Informe um valor: ')

    let valor_numero1 = 0
    let valor_numero2 = 0
    let soma_numeros = 0

    //até a soma ser igual ao numero
    while(soma_numeros !== numero_x){

        valor_numero1 = get_number('Informe um valor: ')
        
        soma_numeros = valor_numero1 + valor_numero2
        valor_numero2 = valor_numero1
        }

    print(`A soma de [${soma_numeros - valor_numero2}] + [${valor_numero1}] é igual à [${soma_numeros}]`)
}


main()