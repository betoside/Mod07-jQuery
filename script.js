console.log("teste 2");

$(function(){
    console.log('blablabla 2');
    tudoPronto();
});

function tudoPronto() {
    console.log("tudo pronto");
}

var $j = jQuery.noConflict();
$j(function () {
    console.log("$j noConflict está funcionando");
});

jQuery(document).ready(function(){
    console.log("funcionando nativamente")
});
