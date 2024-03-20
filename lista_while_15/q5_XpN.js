/**Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
chegar a 2. */

import { get_number , print} from "./io_utils.js"

function main(){
//entrada de valores
    let valor_X = get_number('Informe o valor de [X]: ')
    let valor_N = get_number('Informe o valor de [N]: ')

    //enquando N maior 
    while(valor_N > 2){
        valor_X = valor_X / valor_N
        valor_N--
    }

    print(`O resultado da divisão foi de: [${valor_X.toFixed(3)}]`)
}

main()