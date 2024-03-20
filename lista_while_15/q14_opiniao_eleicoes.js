import { get_number_inteiro,print } from "./io_utils.js"

//pede o voto e enquanto não for os numeros dos canditados ele continua perguntando
function Pedir_Voto(Pedido){
    let Voto = get_number_inteiro(Pedido)

    while(!(Voto === 45 || Voto === 13 || Voto === 23 
        || Voto === 99 || Voto === 98 || Voto === 0 || Voto === -1)){
        console.log('Voto inválido!')
        Voto = get_number_inteiro(Pedido)       
    }

    return Voto
}

//qualcula a porcentagem
function ComputarPorcentagem(Numero_De_Votos, Total){

    const Porcentagem = (Numero_De_Votos * 100) / Total
    return Porcentagem
}

function Verificar_50pcnt_mais(Porcentagem){
    return Porcentagem > 50
}

function main(){

    let Voto_Candidato = 0
    let Candidato_Serra = 0, Candidato_Dilma = 0, Candidato_CiroGomes = 0
    let Votos_Indecisos = 0, Votos_Outros = 0, Votos_Brancos = 0
    let Total_de_Votantes = 0

    print(`
Serra       = 45
Dilma       = 13
Ciro Gomes  = 23
indeciso    = 99
Outros      = 98
Nulo/Branco = 0`)

    while(Voto_Candidato !== -1){

        Voto_Candidato = Pedir_Voto('Informe seu voto: ')
        
        if(Voto_Candidato === -1){
            break
        }    
        Total_de_Votantes++

        if(Voto_Candidato === 45){
            Candidato_Serra++
        }
        else if(Voto_Candidato === 13){
            Candidato_Dilma++
        }
        else if(Voto_Candidato === 23){
            Candidato_CiroGomes++
        }
        else if(Voto_Candidato === 99){
            Votos_Indecisos++
        }
        else if(Voto_Candidato === 98){
            Votos_Outros++
        }
        else{
            Votos_Brancos++
        }

    }

    const Porcentagem_Serra = ComputarPorcentagem(Candidato_Serra,Total_de_Votantes)
    const Porcentagem_Dilma = ComputarPorcentagem(Candidato_Dilma,Total_de_Votantes)
    const Porcentagem_CiroGomes = ComputarPorcentagem(Candidato_CiroGomes,Total_de_Votantes)

    const Porcentagem_Indecisos = ComputarPorcentagem(Votos_Indecisos,Total_de_Votantes)
    const Porcentagem_Outros = ComputarPorcentagem(Votos_Outros,Total_de_Votantes)
    const Porcentagem_BrancosNulos = ComputarPorcentagem(Votos_Brancos,Total_de_Votantes)

    let Possibilidade_Segundo_Turno = ''
    if(Verificar_50pcnt_mais(Porcentagem_Serra) || Verificar_50pcnt_mais(Porcentagem_Dilma) 
    || Verificar_50pcnt_mais(Porcentagem_CiroGomes)){
        Possibilidade_Segundo_Turno = 'SEGUNDO TURNO NÃO OCORRERÁ'
    }
    else{   
        Possibilidade_Segundo_Turno = 'SEGUNDO TURNO OCORRERÁ'
    }   

    print(
`  -------[ PESQUISA DE OPINIÃO PÚBLICA ELEITORAL ]-------
PERCENTUAL DE VOTOS PARA CANDIDATO SERRA : ${Porcentagem_Serra.toFixed(2)} %
PERCENTUAL DE VOTOS PARA CANDIDATA DILMA : ${Porcentagem_Dilma.toFixed(2)} %
PERCENTUAL DE VOTOS PARA CANDIDATO CIRO  : ${Porcentagem_CiroGomes.toFixed(2)} %
PERCENTUAL DE VOTOS EM OUTROS CANDIDATOS : ${Porcentagem_Outros.toFixed(2)} %
PERCENTUAL DE ELEITORES INDECISOS        : ${Porcentagem_Indecisos.toFixed(2)} %
PERCENTUAL DE VOTOS NULOS/BRANCOS        : ${Porcentagem_BrancosNulos.toFixed(2)} %
TOTAL DE PARTICIPANTES DA PESQUISA       : ${Total_de_Votantes} PARTICIPANTES
POSSIBILIDADE DE SEGUNDO TURNO           : ${Possibilidade_Segundo_Turno}`)

}

main()