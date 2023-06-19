/*//ejer 1
let objeto_demo = {
	uno: 1,
	dos: 2,
	tres: 3,
};
let uno = `tres`;
objeto_demo["dos"]; // 2
console.log(objeto_demo[uno]); // nada, not denfined
// ejer 2
let capitales = {
	argentina: `Buenos Aires`,
	uruguay: `montevideo`,
};
let lugar = `uruguay`;
capitales["lugar"]; // undefined
capitales.lugar; // undefined
capitales[lugar]; // undefined
capitales[`argentina`]; // Buenos Aires
capitales.argentina; // Buenos Aires
capitales[argentina]; // undefined
// registro
let registro = {
	usuario: `nide`,
	edad: 17,
	direccion: `calle de mentiritas`,
	fechaDeNacimiento: `15/09/2005`,
	contrasenas: `meolvide04`,
};
console.log(registro);
// miAuto
let propertkey = `modelo`;
let anotherPropertKey = `precio`;
let nextProperty = `color`;
let miAuto = {};
miAuto.marca = `unstring`;
miAuto.ano = 2003;
miAuto.nuevo = false;
miAuto.propertkey = propertkey;
miAuto.anotherPropertKey = parseInt(anotherPropertKey);
miAuto.color = nextProperty;
console.log(miAuto);
// for (const key in miAuto) {
// 	console.log(`${key} : ${miAuto[key]}`);
// }
miAuto[propertkey]; // undefined
miAuto["modelo"]; //undefined
miAuto[nextProperty]; // `color`
miAuto[`color`]; // `color`
//AUMENTAR NOTA	
let alumnos = [
	{ estudiante: `juan`, nota: 6 },
	{ estudiante: `Mario`, nota: 8 },
	{ estudiante: `Julia`, nota: 10 },
	{ estudiante: `Sofia`, nota: 2 },
];
let outpt = [];
alumnos.forEach((obj) => {
	if (obj.nota == 9) {
		obj.nota = obj.nota + 1;
		outpt.push(obj);
	} else if (obj.nota >= 5 && obj.nota < 10) {
		obj.nota = obj.nota + 2;
		outpt.push(obj);
	} else {
		outpt.push(obj);
	}
});
console.log(outpt);
//BASE DE DATOS DE PELICULAS
let pelis = [
	{
		titulo: `nide`,
		rating: 4,
		loHasVisto: true,
	},
	{
		titulo: `Busqueda implacable`,
		rating: 3,
		loHasVisto: false,
	},
	{
		titulo: `Norbil`,
		rating: 5,
		loHasVisto: true,
	},
	{
		titulo: `La vida es bella`,
		rating: 5,
		loHasVisto: false,
	},
];
for (const obj of pelis) {
	if (obj.loHasVisto == true) {
		console.log(`Has visto "${obj.titulo}" - ${obj.rating} estrellas`);
	} else {
		console.log(`No has visto "${obj.titulo}" - ${obj.rating} estrellas`);
	}
}
//NUMEROS DUPLICADOS
let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};
for (let i = 0; i < numeros.length; i++) {
	numeros_duplicados[numeros[i]] = numeros[i] * 2;
}
console.log(numeros_duplicados);
//DESAFIO + 27
let personas = [
	{
		nombre: `Ana`,
		edad: `28`,
	},
	{
		nombre: `Maria`,
		edad: `24`,
	},
	{
		nombre: `Jose`,
		edad: `31`,
	},
];
let personasMas27 = personas.filter((obj) => obj.edad > 27);
console.log(personasMas27);
//CAMINO AL OSCAR
let actoresVocales = [];
let actoresPrin = [
	`Tom hanks`,
	`Johnny Depp`,
	`Elizabeth Taylor`,
	`Morgan Freeman`,
	`Jennifer Aniston`,
	`Meryl Streep`,
	`Natalie Portman`,
	`Ashton Kuchter`,
];
let peliculas = [];
let actoresPrinPerMov = {
	titanic: `Leonardo Dicaprio`,
	"El Padrino": `Al Pacino`,
	Matrix: `Keanu Reeves`,
	"Soy Leyenda": `Will Smith`,
	"Bastardos sin gloria": `Brad Pitt`,
};
for (let i = 0; i < actoresPrin.length; i++) {
	actoresPrin[i] = actoresPrin[i].split(` `);
}
actoresPrin.forEach((val) => {
	val.forEach((ini) => {
		if (
			ini[0].toLowerCase() == `a` ||
			ini[0].toLowerCase() == `e` ||
			ini[0].toLowerCase() == `i` ||
			ini[0].toLowerCase() == `o` ||
			ini[0].toLowerCase() == `u`
		) {
			actoresVocales.push(val.join(` `));
		}
	});
});
for (let i = 0; i < actoresPrin.length; i++) {
	actoresPrin[i] = actoresPrin[i].join(` `);
}
for (const key in actoresPrinPerMov) {
	actoresPrin.push(actoresPrinPerMov[key]);
	peliculas.push(key);
}
let moviePerActor = {};
moviePerActor["Johnny Depp"] = [`Sherlock Gnomes`, `The tourist`];

console.log(moviePerActor);
//POSICION ADECUADA
let personas = [
	{
		nombre: `Alba`,
		edad: 15,
	},
	{
		nombre: `Estrella`,
		edad: 30,
	},
	{
		nombre: `Belen`,
		edad: 20,
	},
	{
		nombre: `Santiago`,
		edad: 4,
	},
	{
		nombre: `Katherine`,
		edad: 55,
	},
];
personas = personas.sort((a, b) => a.edad - b.edad);
personas.forEach((a, index) => {
	personas[index].posicion = index;
});
console.log(personas);
//SOFTWARE FACTORY
let ecommerce = [
	{
		nombre: `Samsung TV`,
		precio: 6000,
		articulos: 10,
	},
	{
		nombre: `DELL notebook`,
		precio: 4000,
		articulos: 30,
	},
	{
		nombre: `Auriculares sony`,
		precio: 1500,
		articulos: 15,
	},
	{
		nombre: `Monithor philips`,
		precio: 12000,
		articulos: 20,
	},
	{
		nombre: `Teclado logitech`,
		precio: 3000,
		articulos: 5,
	},
];
function calcu(arr) {
	let eco = [];
	arr.forEach((indx) => {
		let obj = {};
		obj.nombre = indx.nombre;
		obj.precio = indx.precio * indx.articulos;
		eco.push(obj);
	});
	return eco;
}
console.log(calcu(ecommerce));*/
