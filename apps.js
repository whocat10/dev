//array donde se almacena los nombres ingresados con datos de tipo string
let listaSorteados = [];

//Funcion para capturar el valor de entrada del cuadro de texto
//Usamos el método value.trim para eliminar espacios al inicio y final del string
function capturarNombre() {
    return document.getElementById("amigo").value.trim();
}

//Al hace clic en el botón añador, se una la función para añadir los datos capturados del string
//condiciona que solamente acepta texto y no números
//Restringre si ya se ingresó el nombre entonces da un mensaje de alerta
//Muestra en la pantalla en el espacio de párrafos los nombres ingresados separados por una coma
function agregarAmigo() {
    let nombre = capturarNombre();
    if (!isNaN(nombre)) {
        alert("Solo ingrese nombres en texto, no acepta números");
        return;
    }
    if (listaSorteados.includes(nombre)) {
        alert("El nombre ya se ingresó");
        return;
    }
    if (nombre) {
        listaSorteados.push(nombre);
        document.getElementById("listaAmigos").innerText = listaSorteados.join(", ");
        document.getElementById("amigo").value = "";
    }
}

//Funtión de sorteo
//usa los nombres ingresados y almacenados en el array para hacer clic en el botón de sorteo
//Muestra un mensaje de felicitación seguido por el nombre sorteado
function sortearAmigo() {
    if (listaSorteados.length === 0) {
        alert("La lista está vacía, agrega nombres primero.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaSorteados.length);
    let nombreSorteado = listaSorteados[indiceAleatorio];
    document.getElementById("resultado").textContent = `Felicitaciones, tu amigo secreto es ${nombreSorteado}`;
   
}