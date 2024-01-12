// Toolkit para JS desarrollo de GUI y DOM
// Objetivo: crea un toolkit en un objeto qq para manejar eventos
// inicio: 22 marzo 2019
// revisión: 20210902
// autor: Carlos Grasa Lambea

let qq={ // objeto contenedor del Toolkit

/* desactivado por defecto
	dom: {}, // objeto contenedor de elementos DOM capturados
	captureIds: function() { // captura los elementos DOM por su atributo id, asignando una nueva variable con nombre similar
		for (let tal of document.querySelectorAll("*[id]")) {
			let viejoId=tal.id;
			let nuevoId="_";
			for (let c of viejoId.toLowerCase())
				if ("abcdefghijklmnopqrstuvwxyz0123456789_".includes(c))
					nuevoId+=c;
			while (nuevoId.includes("__"))
				nuevoId=nuevoId.replace("__","_");
			nuevoId=nuevoId.slice(1);
			if (nuevoId!="") {
				qq.dom[nuevoId]=document.getElementById(viejoId);
				console.log("Capturado identificador: "+viejoId+" -> "+nuevoId);
			}
			else
				console.error("Rechazado identificador: "+viejoId);
		}
		return;
	},
*/

	id: function(elemento) { // referencia elemento del DOM por su id
		if (typeof elemento=="string")
			elemento=document.getElementById(elemento);
		if (typeof elemento!="object") {
			console.error("Error: identificador ["+elemento+"] no es un elemento válido.");
			return;
		}
		return elemento;
	},

	on: function(elemento, evento, accion) { // agrega detector de evento al elemento
		this.id(elemento).addEventListener(evento, accion);
		return;
	},

	one: function(elemento, evento, accion) { // agrega detector de evento una sola vez al elemento
		this.id(elemento).addEventListener(evento, accion, {once: true});
		return;
	},

	off: function(elemento, evento, accion) { // retira detector de evento al elemento
		this.id(elemento).removeEventListener(evento, accion);
		return
	},

	fire: function(elemento, evento, datos) { // dispara evento sobre un elemento aÃƒÂ±adiendo datos
		return this.id(elemento).dispatchEvent(new Event(evento), datos);
	}
};

/* obsoleto
qq.one(document,"DOMContentLoaded", function() { // cuando la página cargada pero no renderizada
	init(); // debe implementarse la función global init
	return;
});
*/
