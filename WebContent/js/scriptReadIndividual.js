/**
 * 
 */

window.onload= function(){
	
	document.getElementById("btnReadIndividual").addEventListener("click",ReadIndividual);
}

function ReadIndividual ()
{
	xhr.onload =funcionCallBack;
	let idProduct =  document.getElementById("txtId");
	
	let miFormulario= new FormData();
	miFormulario.append("idProduct");
	
	
	xhr.open("POST","ReadIndividualServlet");
	xhr.send(miFormulario);

}

function funcionCallBack(){
	
	document.getElementById("resultado").innerHTML = xhr.reponseText;
}