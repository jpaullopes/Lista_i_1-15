import { input,print } from "./io_utils.js"

//pede qual o jogar escolhido até ele ser 1 ou 2
function Validar_Jogadores(Mensagem){    
    let Resposta = input(Mensagem)

    while(Resposta !== '1' && Resposta !== '2'){
        print('Resposta inválida!')        
        Resposta = input(Mensagem)
    }
        
    return Resposta
}

//verifica as condções para o fim da partida
function Verificar_Fim_DaPartida(Pontuação_A,Pontuação_B){

    const Diferença_De_Pontos = Math.abs(Pontuação_A - Pontuação_B)

    if(Pontuação_A >= 21 || Pontuação_B >= 21){
        if(Diferença_De_Pontos >= 2){
            return true
        }
    }

}

function main(){

    let Jogador_que_Pontuou = ''
    let Pontuação_Jogador_1 = 0, Pontuação_Jogador_2 = 0
    
    while(!(Verificar_Fim_DaPartida(Pontuação_Jogador_1,Pontuação_Jogador_2))){

        Jogador_que_Pontuou = Validar_Jogadores('Qual jogar pontuou[1|2]: ')
                
        if(Jogador_que_Pontuou === '1'){
            Pontuação_Jogador_1++
        }
        else{
            Pontuação_Jogador_2++
        }        
    }

    let Resultado_Ganhador = ''

    if(Pontuação_Jogador_1 > Pontuação_Jogador_2){
        Resultado_Ganhador = 'JOGADOR 1'
    }
    else{
        Resultado_Ganhador = 'JOGADOR 2'
    }

    print(
`-----[TABELA DE RESULTADOS]-----
O GANHOR DESSA PARTIDA FOI : ${Resultado_Ganhador}
PONTUAÇÃO DO JOGADOR 1     : ${Pontuação_Jogador_1} PONTOS
PONTUAÇÃO DO JOGADOR 2     : ${Pontuação_Jogador_2} PONTOS`)

}

main()