const Client = require("./client");
const Movie = require("./movie");

class Locadoura {
  clients;
  movies;
  constructor() {
    this.clients = new Array();
    this.movies = new Array();
  }
}

module.exports = Locadoura;
