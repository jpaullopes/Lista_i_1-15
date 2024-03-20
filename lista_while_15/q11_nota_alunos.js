import { get_number, get_number_inteiro, print } from "./io_utils.js"

function main(){

    let MatriculaDoAluno = 1
    let Nota1 = Number()
    let Nota2 = Number()
    let Nota3 = Number()
    let MediaFinal = Number()
    let NumeroDeAlunos = Number()
    let NumeroAprovados = Number()
    let NumeroReprovados = Number()


    while(MatriculaDoAluno !== 0){
        //entrada de dados
        MatriculaDoAluno = get_number_inteiro('Informe o número da mátricula do aluno: ')
//se for 0 para
        if(MatriculaDoAluno === 0){
            break
        }
        
        Nota1 = get_number('Informe a primeira nota: ')
        Nota2 = get_number('Informe a segunda nota: ')
        Nota3 = get_number('Informe a terceira nota: ')

        //computa a média
        MediaFinal = ((2 * Nota1) + (3 *Nota2) + (5 * Nota3)) / 10
        NumeroDeAlunos++

        print(`A média final do aluno foi: [${MediaFinal.toFixed(2)}]`)

        if(MediaFinal >= 7){

            print('O aluno foi APROVADO!')
            NumeroAprovados++
        }
        else{

            print('O aluno está REPROVADO!')
            NumeroReprovados++
        }
    }

    print(`
    TOTAL DE APROVADOS : ${NumeroAprovados}
    TOTAL DE REPROVADOS : ${NumeroReprovados}
    TOTAL DE ALUNOS : ${NumeroDeAlunos}`)
}

main()