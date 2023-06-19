// la variable num va a contener el numeor 11 pero lo ultimo que la consola va a mostrar la consola es el numero 9
// 4 8 12 16 20
// 101 100 99 98...
// let num;
// num = -10;
// while (num <= 19) {
// 	console.log(num);
// 	num++;
// }

// num = 10;
// while (num <= 40) {
// 	if (!(num % 2)) {
// 		console.log(num);
// 	}
// 	num++;
// }

// num = 300;
// while (num <= 333) {
// 	if (num % 2) {
// 		console.log(num);
// 	}
// 	num++;
// }

// num = 5;
// while (num <= 50) {
// 	if (!(num % 3) && !(num % 5)) {
// 		console.log(num);
// 	}
// 	num++;
// }

// let clientes = 0;
// let mesas = 20;
// while (clientes <= 20 && mesas != 0) {
// 	alert("bienvenid@ a nuestro cafe! su mesa es la " + mesas);
// 	clientes++;
// 	mesas--;
// }

// num = Number(
// 	prompt(
// 		"ingresa un numero y te dire si es par o impar, si ingresas un numero negativo el programa se cerrara"
// 	)
// );
// while (num != 0 && num > 0 && num % 1 == 0) {
// 	if (!(num % 2)) {
// 		alert("el numero " + num + " es par");
// 	} else {
// 		alert("el numero es impar");
// 	}
// 	num = Number(
// 		prompt(
// 			"ingresa un numero y te dire si es par o impar, si ingresas un numero negativo el programa se cerrara"
// 		)
// 	);
// }

// num = 1;
// while (num <= 100) {
// 	if (num % 3 == 0 && num % 5 == 0) {
// 		console.log("fizz buzz");
// 	} else if (num % 3 == 0) {
// 		console.log("fizz");
// 	} else if (num % 5 == 0) {
// 		console.log("buzz");
// 	} else {
// 		console.log(num);
// 	}
// 	num++;
// }

// num = Number(
// 	prompt(
// 		"ingresa un numero positivo, si ingresas uno negativo el programa terminara"
// 	)
// );
// let amountNum = 0;
// while (num >= 0) {
// 	num = Number(
// 		prompt(
// 			"ingresa un numero positivo, si ingresas uno negativo el programa terminara"
// 		)
// 	);
// 	amountNum++;
// }
// alert("en total, ingresaste " + amountNum + " numeros positivos");

// let quest = prompt("ya merito llegamos?").toLowerCase();
// while (quest != "si") {
// 	quest = prompt("ya merito llegamos?").toLowerCase();
// }
// alert("welcome to far far away");

// let num2;
// while (num != 0 && num2 != 0) {
// 	num = Number(prompt("ingresa un numero"));
// 	num2 = Number(prompt("ingresa el otro numero"));
// 	if (num > num2) {
// 		alert(num + " es mayor que " + num2);
// 	} else if (num == num2) {
// 		alert("los numeros ingresados son iguales");
// 	} else {
// 		alert(num2 + " es mayor que " + num);
// 	}
// }
//                                                              PIEDRA PAPEL O TIJERA
// let mano = prompt("elije  piedra papel o tijera ").toLowerCase();
// num = Math.floor(Math.random() * 3); // 0 1 2
// let again = "";
// while (again == "si" || again == "") {
// 	num = Math.floor(Math.random() * 3);
// 	console.log(num);
// 	if (mano == "piedra") {
// 		mano = 1;
// 		if (mano == num) {
// 			alert("saque piedra, empate");
// 		} else if (num < mano) {
// 			alert("saque tijera, perdi");
// 		} else {
// 			// num  > mano
// 			alert("saque papel, gane");
// 		}
// 	} else if (mano == "papel") {
// 		mano = 1;
// 		if (mano == num) {
// 			alert("saque papel, empate");
// 		} else if (num < mano) {
// 			alert("saque piedra, perdi");
// 		} else {
// 			// num > mano
// 			alert("saque tijera, gane");
// 		}
// 	} else if (mano == "tijera") {
// 		mano = 1;
// 		if (mano == num) {
// 			alert("saque tijera, empate");
// 		} else if (num < mano) {
// 			alert("saque papel, perdi");
// 		} else {
// 			// num > mano
// 			alert("saque piedra, gane");
// 		}
// 	} else {
// 		alert("no ingresaste bien la palabra.");
// 	}
// 	again = prompt("volver a jugar?").toLowerCase();
// 	if (again == "si") {
// 		mano = prompt("elije denuevo, piedra papel o tijera ").toLowerCase();
// 	} else {
// 		alert("gracias por jugar");
// 	}
// }

// num = Number(prompt("ingresa un numero del 1 al 10"));
// let intentos = "first";
// while (intentos == "first") {
// 	intentos = 0;
// 	while (isNaN(num)) {
// 		alert("no ingresaste un numero. vuelve a ingresarlo");
// 		num = Number(prompt("ingresa un numero del 1 al 10"));
// 	}
// 	var quest = Number(prompt("cual es el numero? 902"));
// 	while (isNaN(quest)) {
// 		alert("el quest ingresado es un NaN. vuelve a ingresarlo");
// 		quest = Number(prompt("cual es el numero? 123"));
// 	}
// 	var randNum = Math.floor(Math.random() * num + 1);
// 	while (randNum != quest) {
// 		intentos++;
// 		if (quest > randNum) {
// 			alert("el numero ingresado es mayor al numero secreto");
// 		} else if (quest < randNum) {
// 			alert("el numero ingresado es menor al numero secreto");
// 		}
// 		quest = prompt("cual es el numero? ( estoy dentro del while");
// 		while (isNaN(quest)) {
// 			alert("el quest ingresado es un NaN. vuelve a ingresarlo");
// 			quest = Number(prompt("cual es el numero? 123"));
// 		}
// 	}
// 	alert(
// 		"si, el numero secreto era " +
// 			randNum +
// 			". Necesitaste " +
// 			intentos +
// 			" intentos"
// 	);
// }

// let idk = prompt(
// 	"escribe perro, casa, arbol,pelota o genio y te devolvere la palabra en ingles"
// ).toLowerCase();
// switch (idk) {
// 	case "perro":
// 		alert("dog");
// 		break;
// 	case "casa":
// 		alert("house");
// 		break;
// 	case "pelota":
// 		alert("ball");
// 		break;
// 	case "genio":
// 		alert("genius");
// 		break;
// 	case "arbol":
// 		alert("tree");
// 		break;
// }

// let quest = prompt("agregar otro numero?").toLowerCase();
// let n = 0;
// let present;
// let y;
// while (quest == "si") {
// 	n++;
// 	y = 1;
// 	let x = n;
// 	if (n == 1) {
// 		present = `bienvenido ${n}`;
// 		alert(present);
// 	} else {
// 		while (x > 1) {
// 			Number(n);
// 			Number(x);
// 			present = `bienvenido ${n} te presento a ${(x -= y)}`;
// 			while (x > 1) {
// 				x -= y;
// 				present += `, y a ${x}`;
// 			}
// 		}
// 		alert(present);
// 	}
// 	quest = prompt("agregar otro numero?").toLowerCase();
// }
// alert(`gracias por jugar, entraron ${n} numeros a la fiesta`);
