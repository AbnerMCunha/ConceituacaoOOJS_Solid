
import User from "./User.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const novoAdmin = new User('Abner Rafael Medeiros Cunha','abner@abner.com', '1999-04-03')
//console.log(novoAdmin)
console.log(novoAdmin.exibirinfos())

//novoAdmin.nome= ''
//console.log(novoAdmin.exibirinfos())
novoAdmin.nome = 'Kleber Mendonca Filho'
//novoAdmin.nome = 'Kleber'
console.log(novoAdmin.exibirinfos())
