const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);//console.log(marvel_heros[3][1]);
const hold = marvel_heros.concat(dc_heros);
console.log(hold);

const spredOP = [...marvel_heros, ...dc_heros];
console.log(spredOP);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const allOpenArr=anotherArr.flat(Infinity)
console.log("Flat", allOpenArr);

let n1= 100;
let n2=200;
let n3=300;

console.log(Array.of(n1,n2,n3));






