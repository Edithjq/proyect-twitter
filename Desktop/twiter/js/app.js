var textArea =  document.getElementById("insert-comentary");
var boton = document.getElementById("save");
var comentarios = document.getElementById("comentarios");
/*var respuesta = document.getElementById("conteiner");*/


boton.addEventListener("click", function(event){
	
		/*var p = document.createElement("p")
		p.textContent = textArea.value;
		respuesta.appendChild(p);*/
	if(textArea.value){ 
		var conteiner = document.createElement("div"); 	/*crear div*/
		conteiner.id = "conteiner"; //asignando  un  atributo con id 
		var contenido = document.createTextNode(textArea.value); //creando un campo de texto
		conteiner.appendChild(contenido); //colocando dentro del div el texto 
		comentarios.appendChild(conteiner); //dentro de la section se le asigna otro hijo llamado conteiner
		contenido = " ";
	};
});