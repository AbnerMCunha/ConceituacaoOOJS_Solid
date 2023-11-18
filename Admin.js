//Importante: para utilizar a sintaxe ESM com NodeJS é preciso incluir, 
//no arquivo package.json, a propriedade ”type”: “module” e sempre incluir 
//a extensão do arquivo .js nos caminhos de importação - por exemplo:
//      import soma from ‘./caminho/arquivo.js’;

import User from "./User.js"


export default class Admin extends User{
    //Apesar de ser necessário para classe  receberem propriedades por parametros na instanciada 
    //e também para que a herança de classe funcione, o construtor não é obrigatório; 
    //uma classe pode ter somente métodos ou não receber nenhuma propriedade no momento em que é instanciada.
    constructor(nome, email, nascimento, role = 'admin', ativo ){
        super(nome, email, nascimento,role, ativo)  //Herdado e utilizado todos os campos de user
    }

    //Metodos dentro de Classe, não precisa/deve chamar o metodo com function;
    criarCurso(){
        return `Novo Curso Criado!!`
    }

    //polimorfismo de exibirInfos da Superclasse User
    exibirinfos(){
        return ` Admin: ${this.nome},  ${this.ativo} `
    }            
}

// const novoAdmin = new Admin('Abner','abner@abner.com', '1999-04-03')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirinfos())
// console.log(novoAdmin.criarCurso())
// console.log(Admin.prototype.isPrototypeOf(novoAdmin))   //true : A instancia do objeto NovoUser é subclasse herdada(protipo) de Admin? Sim.
// console.log(User.prototype.isPrototypeOf(novoAdmin))    //True: A instancia do objeto NovoUser é subclasse herdada(protipo) de User
// console.log(User.prototype.isPrototypeOf(Admin))        //False: A classe User é Prototype de Admin? NÃO
// console.log(Admin.prototype.isPrototypeOf(User))        //False: A classe Admin é Prototype de User? NÃO
