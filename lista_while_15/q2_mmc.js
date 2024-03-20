import { get_number_inteiro , print} from "./io_utils.js"

function main(){
//entrada de dados
    const numero_1 = get_number_inteiro('Informe o primeiro valor: ')
    const numero_2 = get_number_inteiro('Informe o segundo valor: ')

    let mmc = 1

    //incrementa o mmc até o while parar
    while(!(mmc % numero_1 === 0 && mmc % numero_2 === 0)){
        mmc++
    }

    print(`O MMC de [${numero_1}] e [${numero_2}] é igual à: [${mmc}]`)

}

main()