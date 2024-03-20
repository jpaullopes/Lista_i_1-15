import {  print, get_number_btween} from "./io_utils.js"

//verifica qual o algorismo da base hexadecima vai correspoder o número
function Algarismo_em_Hexadecimal(numero){
    let Algarismo = 0

    if(numero <= 9){
        Algarismo = numero
    }
    else{
        if(numero === 10){
            Algarismo = 'A'
        }
        if(numero === 11){
            Algarismo = 'B'
        }
        if(numero === 12){
            Algarismo = 'C'
        }
        if(numero === 13){
            Algarismo = 'D'
        }
        if(numero === 14){
            Algarismo = 'E'
        }
        if(numero === 15){
            Algarismo = 'F'
        }
    }

    return Algarismo
}

function main(){

    const Numero_De_entrada = get_number_btween('Informe um Número entre[0-255]: ',255,0)

    let Multiplicador_PosiçãoBinario = 1
    let Resto_Da_Divisão = 0
    let NumeroDividido = Numero_De_entrada
    let NumeroBinario = 0

    //computar o número em binário
    while(NumeroDividido > 0.5){

        Resto_Da_Divisão = NumeroDividido % 2
        NumeroDividido = parseInt(NumeroDividido / 2)
        NumeroBinario += (Resto_Da_Divisão * Multiplicador_PosiçãoBinario)
        Multiplicador_PosiçãoBinario = Multiplicador_PosiçãoBinario * 10

    }

    NumeroDividido = Numero_De_entrada
    let NumeroHexadecimal_Posição0 = 0
    let NumeroHexadecimal_Posição1 = 0
    let Contador_Posicação_Hexadecimal = 0


    //computar numero em hexadecimal
    while(NumeroDividido > 1){

        
        Resto_Da_Divisão = NumeroDividido % 16
        NumeroDividido = parseInt(NumeroDividido / 16)

        NumeroHexadecimal_Posição1 = Algarismo_em_Hexadecimal(Resto_Da_Divisão).toString()
        
        if(Contador_Posicação_Hexadecimal === 0){

            NumeroHexadecimal_Posição0 = NumeroHexadecimal_Posição1
        }

        Contador_Posicação_Hexadecimal++
    }

    const Numero_Hexadecimal = NumeroHexadecimal_Posição1 + NumeroHexadecimal_Posição0

    print(`
NÚMERO NA BASE DECIMAL     : [${Numero_De_entrada}]
NÚMERO NA BASE BINÁRIA     : [${NumeroBinario}]
NÚMERO NA BASE HEXADECIMAL : [${Numero_Hexadecimal}]`)
   
}

main()
