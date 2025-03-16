// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroAmigos = 0;

function agregarAmigo() {
    let entradaNombre = document.getElementById("amigo");
    if(entradaNombre == "") {
        alert("Por favor, inserte un nombre.");
        return;
    } 
    amigos.push(entradaNombre);
    document.getElementById("amigo").value = "";


}

/*
function sortearAmigos() {
    let numeroAmigos =  Math.floor(Math.random()*amigos.length);
    return numeroAmigos;
} *\