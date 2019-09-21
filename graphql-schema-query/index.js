const { ApolloServer, gql } = require('apollo-server');

const usuarios = [{
  id: 1,
  nome: 'João',
  email: 'joao',
  idade: 29,
}, {
  id: 2,
  nome: 'Daniela',
  email: 'danidani',
  idade: 30,
},
{
  id: 3,
  nome: 'Zé',
  email: 'jose',
  idade: 50,
}];

const typeDefs = gql`
  scalar Date
  
  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  # Start of the API
  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int]!
    usuarios: [Usuario]!
    usuario(id: ID): Usuario
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real
    }
  },
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        return produto.preco * (1 - produto.desconto);
      }

      return produto.preco
    }
  },
  Query: {
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
      return usuarios
    },
    usuario(_, args) {
      const selecionados = usuarios.filter(usuario => usuario.id == args.id)
      return selecionados ? selecionados[0] : null;
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}.`);
})