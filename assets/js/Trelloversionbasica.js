function crearPendiente() {
//funcion para extrer el valor del input en la parte donde iran las listas
  var entrada =  document.getElementById("listaAgregada");
  var pendiente = document.getElementById("contenedorLista");
  contenedorLista.innerHTML = entrada.value;
}
