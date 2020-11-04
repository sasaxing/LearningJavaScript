require('./Forest');
require('./Ocean');

// they log the same, which means the Animal's export is the same instance when running in the same process
// which makes sense:
/**
 * export default new Animal()
 */
// is the same as :
/**
 * const myAnimal = new Animal();
 * export default myAnimal
 */
// NOTE: Point is Animal.js will only be loaded once!