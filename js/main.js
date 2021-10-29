//var nome = "Huryel Bertolaia";
//var idade = 21;
//alert(nome+" tem "+ idade+" anos");
//alert(idade+21);
//console.log(nome.replace("Huryel","Leyruh".toUpperCase())+ " tem "+ idade+" anos");
/*
var lista = ["maçã","bana","morango"];
console.log(lista);
//lista.push(prompt("Digite uma fruta"));
console.log(lista);
lista.pop();
console.log(lista.join("|"));

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);

var d = new Date();
console.log(d.getMonth()+1);

console.log("1425"+"-"+"1519");

var historia = ["mãe","floresta","avó"];
console.log(historia.join(">"));
console.log(historia.toString());
*/

function soma(n1,n2){
    return n1+n2;
}

function buttonCliqueAqui(){
    console.log("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";

}

function redirecionar(){
    window.open("https://github.com/HuryCB/EstudoDeJavaScript") //abre em outra janela
    //window.location.href = "https://github.com/HuryCB/EstudoDeJavaScript"; //abre na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse ;)";

}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse ;)";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
a
}

function load(){
   // alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

let valor1 = parseInt(6);
let valor2 = parseInt(145);
let valor3 = parseFloat(15.00);
console.log(valor3);
 salary = parseFloat(valor2) * valor3;
 //console.log(salary.toFixed(2));
 //console.log(valor2.toFixed(2));
// Escreva o seu código aqui
console.log("NUMBER = "+valor1);
console.log("SALARY = U$ "+salary.toFixed(2));