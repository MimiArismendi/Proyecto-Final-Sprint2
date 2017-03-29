function crearPendiente() {
//funcion para extrer el valor del input en la parte donde iran las listas
  var entrada =  document.getElementById("listaAgregada");
  var pendiente = document.getElementById("contenedorLista");
  contenedorLista.innerHTML = entrada.value;
}

//funcion para extraer los datos y enviarlos en forma de lista
function pendiente() {
  var entrada =  document.getElementById("listaAgregada").value;
  var texto = document.createTextNode(entrada);
  var elemento  = document.createElement("li");
  elemento.appendChild (texto);
  document.getElementById("lista").appendChild(elemento );
}
