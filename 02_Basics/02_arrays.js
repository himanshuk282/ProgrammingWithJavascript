const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) //It simply adds to the parent array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes) // Merges into one new array
// console.log(allHeroes)

const heroes = [...marvel_heroes, ...dc_heroes] //Spread operator; same as above
// console.log(heroes)

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const flatArray = nestedArray.flat(Infinity) // Removes the nested arrays and converts into a new array   
// console.log(flatArray); 
// console.log(nestedArray); //Parent does not changes

// More Array Functions
console.log(Array.isArray("Himanshu")) //Checks is args is array or not
console.log(Array.from("Himanshu")) //Converts to array
console.log(Array.from({name: "Himanshu",age:25})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3,...marvel_heroes,...dc_heroes));