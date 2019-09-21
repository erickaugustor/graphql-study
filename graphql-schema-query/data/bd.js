
const perfis = [
  { id: 1, nome: 'comum' },
  { id: 2, nome: 'administrador' },
];

const usuarios = [{
  id: 1,
  nome: 'João',
  email: 'joao',
  idade: 29,
  perfil_id: 1,
  status: 'BLOQUEADO'
}, {
  id: 2,
  nome: 'Daniela',
  email: 'danidani',
  idade: 30,
  perfil_id: 2,
  status: 'INATIVO',
},
{
  id: 3,
  nome: 'Zé',
  email: 'jose',
  idade: 50,
  perfil_id: 1,
  status: 'ATIVO',
}];

module.exports = {
  usuarios,
  perfis,
};
