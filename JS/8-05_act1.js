// let listaDeSuper = [];
// listaDeSuper[0] = `alimento1`;
// listaDeSuper[1] = `alimento2`;
// listaDeSuper[2] = `alimento3`;
// listaDeSuper[3] = `alimento4`;
// console.log(listaDeSuper);
// console.log(listaDeSuper[0]);
// let ultimoElemento = listaDeSuper[3];
// console.log(ultimoElemento);

// let listaDeSuper = [];
// listaDeSuper[0] = `alimento1`;
// listaDeSuper[1] = `alimento2`;
// listaDeSuper[2] = `alimento3`;
// listaDeSuper[3] = `alimento4`;
// listaDeSuper.push(`alimento5`, `alimento6`);
// listaDeSuper.unshift(`alimento0`, `alimento-1`);
// let noHabia = listaDeSuper.pop(); // alimento 6
// let comprado = listaDeSuper.shift(); // alimento 0
// console.log(listaDeSuper.length); // longitud 6 , max index 5
// console.log(listaDeSuper);

// let numbers = [3, 7, 13, 99];
// let double = numbers.map((element) => element * 2);
// console.log(double);

// let frases = [`labore sea dolor`, `justo rebum dolor`, `stet lorem amet`];
// let frasesexcl = frases.map((Element) => `!${Element}!`);
// console.log(frasesexcl);

// let numbers = [6, 1, 34, 94, 3, 17];
// let mul = numbers.reduce((acc, curr) => acc * curr);
// console.log(mul);

// let numbers = [3, 7, 6, 13, 2, 24, 99];
// let impares = numbers.reduce((acc, curr) => {
// 	if (curr % 2 != 0) {
// 		acc.push(curr);
// 	}
// 	return acc;
// }, []);
// console.log(impares);

// let numbers = [5, 4, 1, 9, 2];
// let max = numbers.reduce((acc, curr) => {
// 	if (acc > curr) {
// 		return acc;
// 	} else if (curr > acc) {
// 		return (acc = curr);
// 	}
// });
// console.log(max); //9

// let ars = [1, 2, 3];
// let join = (arr) => arr.join(``);
// console.log(join(ars));

// let numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];
// let sinrepetidos = numeros.reduce((acc, curr) => {
// 	if (acc.indexOf(curr) == -1) {
// 		acc.push(curr);
// 	}
// 	return acc;
// }, []);
// console.log(sinrepetidos);

// let notasDeTps = [4, 7, 8, 5, 10];
// let promedio = notasDeTps.reduce((total, curr, indx) => {
// 	if (indx == notasDeTps.length - 1) {
// 		return (total + notasDeTps[notasDeTps.length - 1]) / notasDeTps.length;
// 	} else if (indx < notasDeTps.length) {
// 		return total + curr;
// 	}
// });
// console.log(promedio);

// let listaDeSuper = [];
// listaDeSuper[0] = `alimento1`;
// listaDeSuper[1] = `alimento2`;
// listaDeSuper[2] = `alimento3`;
// listaDeSuper[3] = `alimento4`;
// listaDeSuper.push(`alimento5`, `alimento6`); // 6
// let super2 = [`arroz`, `carne`, `azucar`, `pan`];
// for (let i = 0; i <= listaDeSuper.length - 1; i++) {
// 	console.log(listaDeSuper[i]);
// }
// function logItems(arr) {
// 	arr.forEach((cosa) => console.log(cosa));
// }
// logItems(listaDeSuper);
// logItems(super2);

// let reverse = [`a`, `b`, `c`];
// let reverse2 = [1, 2, 3];
// function printReverse(arr) {
// 	while (arr.length != 0) {
// 		console.log(arr.pop());
// 	}
// }
// printReverse(reverse);
// printReverse(reverse2);

// let poemaDesordenado = `los sean porque es ley tengan verdadera, cualquier que porque entre pelean devoran de ajuera los los ellos si sea, tiempo en unión primera, la ésa unidos hermanos`;
// let arregloCortado = poemaDesordenado.split(` `);
// let arregloOrdenado = [];
// while (arregloCortado.length > 0) {
// 	arregloOrdenado.push(arregloCortado.shift(), arregloCortado.pop());
// }
// let strOrdenado = arregloOrdenado.join(` `);
// console.log(strOrdenado);

// let array2 = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// let array1 = [1, 1, 1];
// let array3 = [`b`, `b`, `b`];
// function isUniform(array) {
// 	let result = true;
// 	for (let i = 0; i < array.length; i++) {
// 		console.log(i);
// 		if (i == array.length - 1) {
// 			if (array.indexOf(array[i], i) == -1) {
// 				console.log(`entro aqui`);
// 				result = false;
// 				break;
// 			}
// 		} else if (array.indexOf(array[i], i + 1) == -1) {
// 			result = false;
// 			break;
// 		}
// 	}
// 	return result;
// }
// console.log(isUniform(array3));

// let arr = [111, 27, 31, 44, 101, , 213, 33, 58];
// function biggest_smallest(arr_num) {
// 	let small_big = [];
// 	let x = 0; // menor
// 	let z = 0;
// 	arr_num.forEach((element, indx) => {
// 		if (indx == 0) {
// 			x = element;
// 		} else if (element > x) {
// 			x = element;
// 		} else if (indx == arr_num.length - 1) {
// 			if (element > x) {
// 				x = element;
// 			}
// 			small_big.push(x);
// 		}
// 	});
// 	arr_num.forEach((element, indx) => {
// 		if (indx == 0) {
// 			z = element;
// 		} else if (element < z) {
// 			z = element;
// 		} else if (indx == arr_num.length - 1) {
// 			if (element < z) {
// 				z = element;
// 			}
// 			small_big.push(z);
// 		}
// 	});
// 	return small_big;
// }
// console.log(biggest_smallest(arr));

// let mayoresoIgualesA5 = (arr) => arr.filter((nota) => nota >= 5);
// console.log(mayoresoIgualesA5([3, 6, 8, 21]));

// let numbers = [3, 7, 6, 13, 2, 24, 99];
// let pares = numbers.filter((number) => number % 2 == 0);
// console.log(pares);

// let palabras = [`Et`, `Voluptua`, `Sed`, `At`, `Diam`, `Lorem`];
// const palabrasCortas = palabras.filter((pal) => pal.length <= 3);
// console.log(palabrasCortas);

// const mix = [
// 	"Ut vero.",
// 	2,
// 	function () {
// 		console.log("hola mundo!");
// 	},
// 	56,
// 	"Diam rebum nonumy et.",
// 	true,
// 	false,
// 	"Kasd stet.",
// 	"Sit et dolor.",
// 	null,
// 	null,
// 	[1, 2, 3],
// 	"Dolore.",
// ];
// let soloStrings = mix.filter((str) => typeof str === "string");
// console.log(soloStrings);

// function fibonacci(x) {
// 	let a = 0; // 2
// 	let b = 1; //
// 	let c = 0; // 1
// 	let i = 2;
// 	if (x == 1) {
// 		return 0;
// 	} else if (x == 2) {
// 		return 1;
// 	} else if (x == 3) {
// 		return 1;
// 	}
// 	while (i != x && x >= 3) {
// 		for (let g = 0; g != 1; g++) {
// 			c = a + b; //1
// 		}
// 		i++;
// 		if (i == x) {
// 			return c;
// 		}
// 		for (let h = 0; h != 1; h++) {
// 			a = b + c; // 2
// 		}
// 		i++;
// 		if (i == x) {
// 			return a;
// 		}
// 		for (let j = 0; j != 1; j++) {
// 			b = c + a; //3
// 		}
// 		i++;
// 		if (i == x) {
// 			return b;
// 		}
// 	}
// }
// console.log(fibonacci(4));

// function sumArray(arr) {
// 	let sum = arr.reduce((acc, curr) => acc + curr, 0);
// 	return sum;
// }
// console.log(sumArray([-5, 100]));
