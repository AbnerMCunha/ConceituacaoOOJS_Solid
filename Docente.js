import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'Docente', ativo ){
        super(nome, email, nascimento,role, ativo)
    }
    aprovarEstudante(estudante , curso){
        return `Estudante ${estudante}, Aprovado no Curso ${curso}!!`
    }

    //polimorfismo de exibirInfos da Superclasse User
    exibirinfos(){
        return ` Docente: ${this.nome},  ${this.ativo} `
    }                
}
/*
const novoDocente = new Docente('Julio Cesar', 'Julio@Cesar.com', '1986-05-19')
console.log(novoDocente)
console.log(novoDocente.exibirinfos())
console.log(novoDocente.aprovarEstudante('Calitos', 'Arquitetura e Urbanismo'))
console.log(Docente.prototype.isPrototypeOf(novoDocente))
*/