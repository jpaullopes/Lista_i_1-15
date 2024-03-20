import { get_number_inteiro, print } from "./io_utils.js"

function main(){
    let numero_de_entrada = 1

    //enquanto número diferente de 0
    while (numero_de_entrada !== 0){
        numero_de_entrada = get_number_inteiro('Informe um número: ')
        let numero_divisor = Math.abs(numero_de_entrada)
        //se o número for 0 ele para
        if(numero_de_entrada === 0){
            break
        }
        print(`Os números divisores de [${numero_de_entrada}] são:`)

        while(numero_divisor > 0){
            if(numero_de_entrada % numero_divisor === 0){
                print(`Divisor = [${numero_divisor}]`)
            }
                numero_divisor -= 1
        }
    }

}

main()