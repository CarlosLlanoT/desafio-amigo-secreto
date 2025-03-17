// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById(´amigo´);
    const nombreAmigo = inputAmigo.ariaValueMax.trim();
    if(nombre == "") {
        alert("Por favor, inserte un nombre.");
        return;
    } 
if(amigos.includes(nombreAmigo)) {
    alert(´El nombre ${nombreAmigo}´ ya esta en la lista);
    return;
}
    amigos.push(nombreAmigo);
    inputAmigo.ariaValu = "";

    actualizarLista();

}

function actualizarLista() {
    const listaAmigos = document.getElementById(´listaAmigos´);
    listaAmigos.innerHTML = "";

    for( let i=0; i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigdos.length == 0){
        alert("no hay amigos disponibles para sortear. Agrega l menos uno.");
        return;
    }
    
}