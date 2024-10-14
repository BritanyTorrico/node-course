// const {emailTemplate} = require('./js-foundation/01-template');

// require('./js-foundation/02-destructuring');
// const { getUserById } = require("./js-foundation/03-callbacks");

// const { getUserById } = require("./js-foundation/04-arrow");

// const id = 2;

// getUserById(id, (error, user) => {
//   if (error) throw new Error(error);
//   console.log({user});
// });

// require("./js-foundation/05-factory");

// !regferencia a FACTORY FUCTIONS y uso
// const {getAge,getUUI} = require('./plugins');

// const {buildMakePerson} = require('./js-foundation/05-factory')

// const makePerson= buildMakePerson({getAge,getUUI}); // esto es una funcion FACTORY FUNCTION

// const obj = { name: " Britany", birthDate: "1999-09-03" };

// const john = makePerson(obj);
// console.log(john);


// !regferencia a promise y uso

// const getPokemonById = require("./js-foundation/06-promises");

// getPokemonById(3)
//   .then((pokemon) => console.log(pokemon))
//   .catch((err) => console.log("porfavor intente  de nuevo "))
//   .finally(() => console.log('Finalmente')
//   )

// !regferencia a axios
// const getPokemonById = require("./js-foundation//07-async");

// getPokemonById(2)
//   .then((pokemon) => console.log("name:",pokemon))
//   .catch((err) => console.log("porfavor intente  de nuevo "))
//   .finally(() => console.log('Finalmente')
//   )



const {builLogger}= require('./plugins')


const logger = builLogger('app.js');
logger.log('Hola mudo');
logger.error('Hola error');
