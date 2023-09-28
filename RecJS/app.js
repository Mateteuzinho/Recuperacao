/*- Criar uma classe Produto com os atributos cod, descricao, valor, estoque
- Criar uma classe Cliente com os atributos numero, nome, email

Montar um programa que cadastre produtos e clientes 
usando classe dentro de vetores, um chamado produtos[] 
e outro clientes[] com um menu para escolhe se será cadastrado um produto ou cliente. 
O programa dever ter opção também de selecionar um produto especifico ou cliente para 
alteração de dados ou mesmo exclusão e também o programa dever ter opção de listar os dados de 
produtos ou de clientes conforme a escolha do usuário. */

class Produto {
    constructor(cod, descricao, valor, estoque) {
      this.cod = cod;
      this.descricao = descricao;
      this.valor = valor;
      this.estoque = estoque;
    }
  }
  
  class Cliente {
    constructor(numero, nome, email) {
      this.numero = numero;
      this.nome = nome;
      this.email = email;
    }
  }

const produtos = [];
const clientes = [];

let prompt = require('prompt-sync')()

function cadastrarProduto() {
    const cod = prompt("Informe o código do produto:");
    const descricao = prompt("Informe a descrição do produto:");
    const valor = parseFloat(prompt("Informe o valor do produto:"));
    const estoque = parseInt(prompt("Informe o estoque do produto:"));
  
    const produto = new Produto(cod, descricao, valor, estoque);
    produtos.push(produto);
    console.log("Produto cadastrado com sucesso!");
  }
  
  function cadastrarCliente() {
    const numero = prompt("Informe o número do cliente:");
    const nome = prompt("Informe o nome do cliente:");
    const email = prompt("Informe o email do cliente:");
  
    const cliente = new Cliente(numero, nome, email);
    clientes.push(cliente);
    console.log("Cliente cadastrado com sucesso!");
  }
  
  function listarProdutos() {
    console.log("Lista de Produtos:");
    produtos.forEach((produto) => {
      console.log(`Código: ${produto.cod}, Descrição: ${produto.descricao}, Valor: ${produto.valor}, Estoque: ${produto.estoque}`);
    });
  }
  
  function listarClientes() {
    console.log("Lista de Clientes:");
    clientes.forEach((cliente) => {
      console.log(`Número: ${cliente.numero}, Nome: ${cliente.nome}, Email: ${cliente.email}`);
    });
  }
  
  function menu() {
    while (true) {
      const escolha = prompt("Escolha uma opção:\n1 - Cadastrar Produto\n2 - Cadastrar Cliente\n3 - Listar Produtos\n4 - Listar Clientes\n5 - Sair");
  
      switch (escolha) {
        case "1":
          cadastrarProduto();
          break;
        case "2":
          cadastrarCliente();
          break;
        case "3":
          listarProdutos();
          break;
        case "4":
          listarClientes();
          break;
        case "5":
          return;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    }
  }
  
  menu();
  
