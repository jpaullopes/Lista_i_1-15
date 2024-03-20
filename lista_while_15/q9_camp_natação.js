import { get_number, get_number_above, get_number_inteiro, input, print } from "./io_utils.js"

//verificar  colocação e atribuir os pontos de acordo
function PontuaçãoDaProva(Posição){
    let Pontuação = 0

    if(Posição === 1){
        Pontuação = 9
    }
    else if(Posição === 2){
        Pontuação = 6
    }
    else if(Posição === 3){
        Pontuação = 4
    }
    else if(Posição === 4){
        Pontuação = 3
    }

    return Pontuação
}

//resultado da competição
function Resultado_Da_Competição(Pontuação_A,Pontuação_B){
    let Resultado = 'EMPATE ENTRE O CLUBE A E O CLUBE B'
    
    if(Pontuação_A > Pontuação_B){
        Resultado = 'O CLUBE "A" FOI O VENCEDOR'
    }
    else if(Pontuação_B > Pontuação_A){
        Resultado = 'O CLUBE "B" FOI O VENCEDOR'

    }

    return Resultado
}

//pede um clube até ele ser 'A' ou 'B'
function Pedir_Clube(Clube){

    let Qual_O_Clube = input(Clube).toUpperCase()
    while(Qual_O_Clube !== 'A' && Qual_O_Clube !== 'B'){

        Qual_O_Clube = input(Clube).toUpperCase()
    }
    return Qual_O_Clube
}

function main(){
//entrada de dados
    let NumeroDaProva = get_number_inteiro('Informe o número da prova: ')
    let Quantidadae_De_Competidores = get_number_inteiro('Informe a quantidade de nadadores: ')

    let NomeCompetidor = ''
    let Classificação_Do_Nadador = 0
    let Tempo_Da_Prova = 0
    let Clube = ''
    let Pontuação_Nadador = 0
    let Pontuação_Clube_A = 0
    let Pontuação_Clube_B = 0
    let Contador_Competidores = 0

    //enquanto numero da prova e quantidade d ecompetidores for diferente de 0
    while(NumeroDaProva !== 0 && Quantidadae_De_Competidores !== 0){
        
        Contador_Competidores = 0
//enqueanto contadoer de competidores for menor que a quantidade de competidores
        while(Contador_Competidores < Quantidadae_De_Competidores){

            Contador_Competidores++

            NomeCompetidor = input('Informe o nome do competidor: ')
            Classificação_Do_Nadador = get_number_above('Informe a classificação do nadador: ',0)
            Tempo_Da_Prova = get_number('Informe o tempo da prova: ')
            Clube = Pedir_Clube('Informe o clue do competidor[A|B]: ')

            Pontuação_Nadador = PontuaçãoDaProva(Classificação_Do_Nadador)

            if(Clube === 'A'){
                Pontuação_Clube_A += Pontuação_Nadador
            }
            else{
                Pontuação_Clube_B += Pontuação_Nadador
            }

        }

        NumeroDaProva = get_number_inteiro('Informe o número da prova: ')
        Quantidadae_De_Competidores = get_number_inteiro('Informe a quantidade de nadadores: ')
    }

    print(`--[TABELA DE RESULTADOS]--
PONTUAÇÃO CLUBE A  : ${Pontuação_Clube_A} PONTOS
PONTUAÇÃO CLUBE B  : ${Pontuação_Clube_B} PONTOS`)

    const Resultado = Resultado_Da_Competição(Pontuação_Clube_A,Pontuação_Clube_B)
    print(
`O RESULTADO DA PARTIDA FOI:
   ---[${Resultado}]---`)

}

main()