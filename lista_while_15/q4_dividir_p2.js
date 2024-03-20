import { get_number , print} from "./io_utils.js"

function main(){
    //entrada de valores
    const numero = get_number("informe o valor de entrada: ")
    let resultado = numero

    //se for numero negativo
    if(resultado < 0){
        resultado = resultado * -1
    }

    while(resultado >= 1){

        resultado = resultado / 2
    }

    print(`Número: [${numero}]
Resultado da última divisão por 2 = [${resultado}] `)
}


main()