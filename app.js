// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let entradaNombre = document.getElementById("amigo");
    if(entradaNombre == "") {
        alert("Por favor, inserte un nombre.");
        return;
    } 
    amigos.push(entradaNombre);
    document.getElementById("amigo").value = "";
    listaActualizada();

}

function listaActualizada() {
    let listaAmigos = document.getElementById("listaAmigos");
    for( let i=0; i<amigos.length; i++){
        
    }
}