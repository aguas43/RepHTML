// function test(inpt) {
// 	return inpt * 3;
// }
// alert(test(num));

// num = Number(prompt(`dame el primer numero`));
// let num2 = Number(prompt(`dame el segundo numero`));
// function between(num1, num2) {
// 	return num1 * num2;
// }
// alert(between(num, num2));

// num = Number(prompt(`dame el primer numero`));
// let num2 = Number(prompt(`dame el segundo numero`));
// function division(num1, num2) {
// 	return num1 / num2;
// }
// alert(division(num, num2));

// num = Number(prompt(`dame el primer numero`));
// let num2 = Number(prompt(`dame el segundo numero`));
// function resto(num1, num2) {
// 	return num1 % num2;
// }
// alert(resto(num, num2));

// function contarDeA_n(contar_de_a, contar_hasta) {
// 	while (contar_hasta != 0) {
// 		if (contar_hasta % contar_de_a == 0) {
// 			console.log(contar_hasta);
// 		}
// 		contar_hasta--;
// 	}
// }
// contarDeA_n(2, 40);
// let palabra1 = prompt(`dame la primera palabra`);
// let palabra2 = prompt(`dame la segunda palabra`);
// let limit = Number(prompt(`hasta que numero debo contar?`));
// let num = Number(prompt(` los numeros a reemplazar deben ser multiplos de?`));
// let num2 = Number(prompt(`los numeros a reemplaazar deben ser multiplos de?`));
// function fizzBuzz2(palabra1, palabra2, fizz_num, buzz_num) {
// 	let result = ``;
// 	for (let i = 1; i <= limit; i++) {
// 		if (i == 1) {
// 			result += `${i}`;
// 		} else if (i % num == 0 && i % num2 == 0) {
// 			result += `,${palabra1} ${palabra2}`;
// 		} else if (i % fizz_num == 0) {
// 			result += `,${palabra1}`;
// 		} else if (i % buzz_num == 0) {
// 			result += `,${palabra2}`;
// 		} else {
// 			result += `,${i}`;
// 		}
// 	}
// 	console.log(result);
// }
// fizzBuzz2(palabra1, palabra2, num, num2);
