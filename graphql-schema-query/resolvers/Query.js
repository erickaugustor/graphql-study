const { usuarios, perfis } = require('../data/bd');

module.exports = {
  ola() {
    return 'Any string';
  },
  horaAtual() {
    return new Date
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;

    return Array(6).fill(0)
      .map(n => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Ana',
      email: 'ana',
      idade: 23,
      salario_real: 12.2,
      vip: true,
    }
  },
  produtoEmDestaque() {
    return {
      nome: 'Notebook',
      preco: 1000.0,
      desconto: 0.5,
    }
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, args) {
    const selecionados = usuarios.filter(usuario => usuario.id === args.id)
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return usuarios;
  },
  perfil(_, args) {
    const selecionados = perfis.filter(p => p.id === args.id)
    return selecionados ? selecionados[0] : null;
  },
};