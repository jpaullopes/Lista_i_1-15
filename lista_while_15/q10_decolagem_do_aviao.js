import { get_number, get_number_above, print } from "./io_utils.js"

function main(){

    print('----------------------------------')
    print('Teste de Combustivel e decolagem'.toUpperCase())
    print('----------------------------------')
    
    let Litros = get_number('Quantidade de Litros de Combustível[L]: ')

    while (Litros < 10000){
        print('Quantidade Inferior ao Necessário')
        Litros = get_number('Quantidade de Litros de Combustível[L]: ')        
    }
    let Peso_Combustivel = Litros * 1.5
    
    let Total_Containers = get_number_above('Quantidade Containers: ',0)
    let Contador_Containers = 0
    let Peso_Total_Containers = 0
    
    while(Contador_Containers !== Total_Containers){
        Contador_Containers++
        Peso_Total_Containers += get_number('Peso do Container[KG]: ')
    }
    
    let Numero_Bilhete = get_number_above('Número do Bilhete: ',0)
    let Quantidade_Malas_Da_Pessoa = 0
    let Contador_Pessoas = 0
    let Peso_Malas = Number()
    
    while(Numero_Bilhete !== 0){

        Contador_Pessoas += 1
        Quantidade_Malas_Da_Pessoa = get_number_above('Quantidade de Malas: ',0)
        Peso_Malas += Quantidade_Malas_Da_Pessoa * 10
        Numero_Bilhete = get_number_above('Número do Bilhete: ',0)
    
    }

    let Peso_Total_Passageiros = Contador_Pessoas * 70
    let Peso_Passageiros_Malas = Peso_Total_Passageiros + Peso_Malas
    
    let Peso_Decolagem = Peso_Combustivel + Peso_Total_Containers + Peso_Passageiros_Malas
    let Possibilidade_Combustivel_Adicional = (500000 - Peso_Decolagem) / 1.5
    
    if(Possibilidade_Combustivel_Adicional < 0){

        Possibilidade_Combustivel_Adicional = 0
    }
    
    print(`
QUANTIDADE DE PASSAGEIROS   : [${Contador_Pessoas}] Pessoa(s)
PESO TOTAL DE BAGAGENS      : [${Peso_Malas.toFixed(2)}] Kg
PESO DOS PASSAGEIROS        : [${Peso_Total_Passageiros.toFixed(2)}] Kg
PESO DA CARGA               : [${Peso_Total_Containers.toFixed(2)}] Kg
COMBUSTIVEL EXTRA           : [${Possibilidade_Combustivel_Adicional.toFixed(2)}] L
PESO TOTAL                  : [${Peso_Decolagem}] Kg
    `)
    
    if(Peso_Decolagem <= 500000){
        print('-------[DECOLAGEM AUTORIZADA!]-------')
    }
    else{

        print('-------[DECOLAGEM NÃO AUTORIZADA!]-------')
    }

}    


main()