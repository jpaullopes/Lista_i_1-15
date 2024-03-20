import {get_number, print} from './io_utils.js'

function main(){
//entrada dos valores
    const primeiro_numero = get_number('Informe o valor do primeiro número: ')
    let outro_numero = get_number('Informe outro valor: ')

    //até um numero ser igual a outro
    while(primeiro_numero !== outro_numero){

        print('Valor diferente do primeiro valor informado!')
        outro_numero = get_number('Informe outro valor: ')
    }

    print('Valores iguais!')
}


main()