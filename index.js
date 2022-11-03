//inportação das classes
const Client = require("./entidade/client");
const Locadoura = require("./entidade/locadoura");
const Movie = require("./entidade/movie");
//funções de criação de objetos
function handleNewClient(name, age, cpf, cell, balance, reactMovies) {
  let newClient = new Client(name, age, cpf, cell, balance, reactMovies);
  return newClient;
}
function handleNewMovie(genre, ageGroup, name) {
  let newMovie = new Movie(genre, ageGroup, name);
  return newMovie;
}
//criando locadoura
const lan1 = new Locadoura();
//criando objeto, usando função
const ramon = handleNewClient("ramon", 22, 874, 999, 20, "babel");
const fernanda = handleNewClient("fernanda", 17, 555, 444, 0, "God of War");
const godofwar = handleNewMovie("Ação", 16, "God of War");
const babel = handleNewMovie("Drama", 14, "Babel");
//isserindo informação a lista
lan1.clients.push(fernanda);
lan1.clients.push(ramon);
lan1.movies.push(godofwar);
lan1.movies.push(babel);

console.log(lan1);
