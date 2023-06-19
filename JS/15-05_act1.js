// let autos = [
// 	{
// 		marca: `citroen`,
// 		modelo: `C3`,
// 		ano: 2013,
// 		dueno: `juan`,
// 		color: { capot: `gris`, puertas: `negro` },
// 		duenosAnteriores: [],
// 	},
// 	{
// 		marca: `honda`,
// 		modelo: `fit`,
// 		ano: 2016,
// 		dueno: `santiago`,
// 		color: { capot: `rojo`, puertas: `rojo` },
// 		duenosAnteriores: [`jorge`, `ivan`],
// 	},
// ];
// autos[1] = {
// 	marca: `citroen`,
// 	modelo: `C3`,
// 	ano: 2013,
// 	dueno: `santiago`, // autos[1].dueno = `santiago`
// 	color: { capot: `negro`, puertas: `negro` }, //autos[1].color.capot = `negro`
// 	duenosAnteriores: [`juan`], // autos[1].deunosAnteriores.push(`juan`)
// };
// autos[1].color.capot = `negro`;
// console.log(autos[1].color.capot);

// let nave = {
// 	tipoDeNave: `espacial`,
// 	pais: `ARGENTINA LOCOOOOO`,
// 	cantidadDeTripulantes: 5,
// 	tripulantes: [`p1`, `p2`, `p3`],
// 	estado: `usada`,
// 	despegar: (function despegar() {
// 		console.log(`¡Todo listo para el despegue! Oh no ... ¡algo se rompió!`);
// 		alert(`¡BOOOOOOM!`);
// 	})(), // agregar parentesis al final de los corchetes para que la funcion se active automaticamente al
// };

// function cadenaDeCaracteres(text) {
// 	let arr = text.split(` `);
// 	console.log(arr[29]);
// 	return console.log(
// 		`el texto contiene ${arr.length} palabras`,
// 		`la primera palabra del texto es ${arr[0].toUpperCase()}`,
// 		`la ultima palabra del texto es ${arr[arr.length - 1].toUpperCase()}`
// 	);
// }
// cadenaDeCaracteres(
// 	`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error adipisci autem doloribus beatae, laudantium explicabo ut aperiam aut quam facilis corporis optio velit! Vitae itaque reiciendis incidunt accusamus culpa?`
// );

// function promedio(arr) {
// 	let aprobados = arr.filter(
// 		(alumnos) =>
// 			(alumnos.promedio = Math.round(
// 				alumnos.notas.reduce((acc, curr) => acc + curr) / alumnos.notas.length
// 			)) >= 6
// 	);
// 	return aprobados;
// }

// let alumnes = [
// 	{
// 		alumno: `nombre1`,
// 		notas: [10, 10, 10, 10, 10, 10, 10, 10, 9, 10],
// 		promedio: 0,
// 	},
// 	// {
// 	// 	alumno: `nombre1`,
// 	// 	estado: `aprobado/desaprobado`,
// 	// 	promedio : 2
// 	// },// expected output
// ];
// console.log(promedio(alumnes));
// // let arr = [1, 2, 3, 4, 5];
// // let sum = arr.reduce((acc, curr) => acc + curr);
// // console.log(sum);
