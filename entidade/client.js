const Person = require("./person");

class Client extends Person {
  balance;
  constructor(name, age, cpf, cell, balance, reactMovies) {
    super(name, age, cpf, cell);
    this.balance = balance;

    this.reantMovies = reactMovies;
  }
}

module.exports = Client;
