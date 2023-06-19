/*let boton = document.createElement(`button`);
boton.textContent = `BEEP`;
boton.id = `botin`;
document.querySelector(`body`).appendChild(boton);
let i = 0;
let button = document.querySelector("button");
button.addEventListener("click", seEjecutaElEvento);
function seEjecutaElEvento() {
	let p = document.createElement(`p`);
	p.textContent = `BEEP`;
	document.querySelector(`body`).appendChild(p);
	document.body.classList.toggle(`color`);
	for (let i = 0; i < document.getElementsByTagName(`p`).length; i++) {
		document.getElementsByTagName(`p`)[i].classList.add(`color`);
	}
}
document.querySelector(`body`).appendChild(document.querySelector(`script`));
//  RESALTADOR
let parraf = document.getElementsByTagName(`p`);
for (let i = 0; i < parraf.length; i++) {
	parraf[i].addEventListener(`click`, () =>
		parraf[i].classList.toggle(`resaltado`)
	);
}
// DIV MAGICO
let divSecreto = document.createElement(`div`);
divSecreto.id = `magia`;
divSecreto.innerHTML = `<img src = "https://media.tenor.com/G1XJXGgvpwcAAAAM/aintnoway.gif" style = "margin-left: 300px;">`;
document.body.appendChild(divSecreto);
document.querySelector(`body div img`).addEventListener(`mouseover`, () => {
	let img = document.querySelector(`body div img `);
	img.style.visibility = `hidden`;
});*/

//SHOW ME THE MONEY
document.querySelectorAll(`img`).forEach((a) => a.classList.add(`oculto`));
for (
	let index = 0;
	index < document.querySelectorAll(`Button`).length;
	index++
) {
	document
		.querySelectorAll(`button`)
		[index].addEventListener(`click`, () =>
			document.querySelectorAll(`img`)[index].classList.toggle(`oculto`)
		);
	document
		.querySelectorAll(`img`)
		[index].addEventListener(`click`, () =>
			document.querySelectorAll(`img`)[index].classList.toggle(`oculto`)
		);
}
