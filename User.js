export default class User{
    #nome
    #sobrenome
    #email 
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome,         
        this.#sobrenome = '',
        this.#email = email,
        this.#nascimento = nascimento,
        this.#role = role || 'estudante',
        this.#ativo = ativo
    }

    //metodo privado
    #montaObjetoUser(){
        return {
            nome : this.#nome,
            sobrenome : this.#sobrenome,
            email : this.#email,
            nascimento : this.#nascimento,
            role : this.#role,
            ativo : this.#ativo                        
        }
    }

    exibirinfos(){

        //1. com getters e setters* não precisa de #; no caso antes dessa* implementação, essa era a unica forma correta para acessar os dados (com o #)
        //return `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo} `

        //2. para não usar o # foi criado o metodo privado, que retona não mais pelos #propriedade da classe, agora, retirando a #. essa implentação tem mais intuito de apresentar metodos privados.
        //const objUser = this.#montaObjetoUser()
        //return `\n${objUser.nome} ${objUser.sobrenome} , ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${this.ativo} `
        
        //3. utilizando diretamente getters e setters ( incluido o get de nome que retornar o nome + sobrenome, concatenado )
        return ` Estudante: ${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo} `
    }        

    //Getters e Setters
        //GETTERS
         get nome() {
             return this.#nome +' ' + this.#sobrenome
         }  
        get sobrenome() {
            return this.#sobrenome
        }           
         get email() {
             return this.#email
         }  
         get nascimento() {
             return this.#nascimento
         }  
         get role() {
             return this.#role
         }  
         get ativo() {
             return this.#ativo
         }

        //SETTERS     
         set nome(NovoNome) {
            if(NovoNome){
                
                let [nome, ...sobrenome] = NovoNome.split(" ")
                sobrenome = sobrenome.join(' ')
                this.#nome = nome
                this.#sobrenome = sobrenome

                //this.#nome = NovoNome
                console.log('Sucesso na Alteração de Nome submetido: "' + NovoNome + '". ') //retornando o nome pelo get, que já vem concatenado com o sobrenome

            }else{                
                throw new error('Alteração de Nome é invalido.')
                //console.log('Alteração de Nome submetido: "' + NovoNome + '", é invalido. ')
            }
         }  


         set sobrenome(NovoSobrenome) {
            this.#sobrenome = NovoSobrenome
        }  

         set email(NovoEmail) {
             this.#email = NovoEmail
         }  
         set nascimento(NovoNascimento) {
             this.#nascimento = NovoNascimento
         }  
         set role(NovoRole) {
             this.#role = NovoRole
         }  
         set ativo(NovoAtivo) {
             this.#ativo = NovoAtivo
         }  
}


/*


  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },


//Criando um novo objeto com base na classe User, utilizando o construtor 
//const novoUser = new User('abner', 'abner@abner.com', '2023-16-11' , 'admin', false)   //Instanciando com new um novo objeto, alterando os parametros padronizados.
const novoUser = new User('abner', 'abner@abner.com', '2023-16-11' )   //Instanciando com new um novo objeto da classe User.
console.log(novoUser)  //retornando o objeto baseado na classe User.
console.log(novoUser.exibirinfos()) //Acessando metodos da classe User que é prototipo da const novoUser
console.log(User.prototype.isPrototypeOf(novoUser)) //true : A Classe User é protipo do NovoUser? Sim.

*/