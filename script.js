function insert(x){
    let num = document.getElementById("display").value; //le o valor que ja está no display
    document.getElementById("display").value = num + x; //adiciona o novo numero ao valor lido
}


function limpar(){
    document.getElementById("display").value = "";
}

function back(){
    let resultado = String(document.getElementById("display").value) ;
    document.getElementById("display").value = resultado.substring(0, resultado.length -1); //remove o ultimo elemento da string
}

function calcular(){
    let resultado = (document.getElementById("display").value);
    if(resultado){
        document.getElementById("display").value = eval(resultado);
    }
}

document.getElementById("1").onclick= function() {insert("1")};
document.getElementById("2").onclick= function() {insert("2")};
document.getElementById("3").onclick= function() {insert("3")};
document.getElementById("4").onclick= function() {insert("4")};
document.getElementById("5").onclick= function() {insert("5")};
document.getElementById("6").onclick= function() {insert("6")};
document.getElementById("7").onclick= function() {insert("7")};
document.getElementById("8").onclick= function() {insert("8")};
document.getElementById("9").onclick= function() {insert("9")};
document.getElementById("0").onclick= function() {insert("0")};
document.getElementById("dot").onclick= function() {insert(".")};
document.getElementById("adiciona").onclick= function() {insert("+")};
document.getElementById("subtrai").onclick= function() {insert("-")};
document.getElementById("divide").onclick= function() {insert("/")};
document.getElementById("multiplica").onclick= function() {insert("*")};

document.getElementById("c").onclick= function() {limpar()};
document.getElementById("ac").onclick= function() {limpar()};
document.getElementById("del").onclick= function() {back()};

document.getElementById("calcular").onclick= function() {calcular()};



