import { get_number,print,get_number_above } from "./io_utils.js"

//recebe o salario e entrega qual a porcentagem de aumento
function Computar_Porcentagem_De_Acrescimo(Salario){
    let Porcentagem_Acrecimo = 10

    if(Salario <= 2900){
        Porcentagem_Acrecimo = 25
    }
    else if(Salario <= 5999){
        Porcentagem_Acrecimo = 20
    }
    else if(Salario <= 9999){
        Porcentagem_Acrecimo = 15
    }

    return Porcentagem_Acrecimo
}

function main(){

    let Salario_Reajustado = 0
    let Soma_Salarios_PreReajuste = 0
    let Soma_Salarios_Reajuste = 0
    let Porcentagem_Do_Acrescimo = 0
    let Valor_De_Aumento = 0
    let Diferenca_reajuste = 0

    let Salario_Pre_Reajuste = get_number_above('Informe o valor salárial[R$]: ',0)

    while(Salario_Pre_Reajuste > 0){

        Porcentagem_Do_Acrescimo = Computar_Porcentagem_De_Acrescimo(Salario_Pre_Reajuste)
        Valor_De_Aumento = Salario_Pre_Reajuste * (Porcentagem_Do_Acrescimo / 100)
        
        Salario_Reajustado = Salario_Pre_Reajuste + Valor_De_Aumento
        
        Soma_Salarios_PreReajuste += Salario_Pre_Reajuste
        Soma_Salarios_Reajuste += Salario_Reajustado
        Diferenca_reajuste =  Soma_Salarios_Reajuste - Soma_Salarios_PreReajuste

        print(`
PORCENTAGEM DE REAJUSTE       : ${Porcentagem_Do_Acrescimo}%
SALÁRIO REAJUSTADO            : R$ ${Salario_Reajustado.toFixed(2)}
SOMA DOS SALÁRIOS PRÉ-REAJUSTE: R$ ${Soma_Salarios_PreReajuste.toFixed(2)}
SOMA DOS SALÁRIOS PÓS-REAJUSTE: R$ ${Soma_Salarios_Reajuste.toFixed(2)}
DEFERENÇA DOS REAJUSTES       : R$ ${Diferenca_reajuste.toFixed(2)}
`)
        
        Salario_Pre_Reajuste = get_number_above('Informe o valor salárial[R$]: ',0)
    }

    print('---- [FIM DO PROGRAMA] ----')
}


main()