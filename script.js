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

jQuery(function(){
    console.log(jQuery('button'));
});

$j(function(){
    console.log($j('.bt6'));
    console.log( jQuery('.bt6') );

    $j('.manipulandoAttr').attr('href', 'https://www.google.com.br');
    $j('.manipulandoAttr').text('Texto: Google');
    $j('.attr-img-google').attr('width', 100);
    $j('.attr-img-google').attr('border', 5);
    console.log('border',$j('.attr-img-google').attr('border'));
    console.log('src',$j('.attr-img-google').attr('src'));

    $j('.teste7').find('button').addClass('estilo7');

    $j('.div9').find('ul li').html('<strong>bold</strong>');
    $j('.div9').find('ul li').text('ultimo LI');
    $j('.div9').find('input').attr('value', $j('.div9').find('button').text());
    console.log($j('.div9').find('button').text());
    $j('.div9').find('input').val('utilizando o .val()');
    $j('.div9').find('input').after('<input type=text id=div92>');
    $j('.div9').find('input').before('<input type=text id=div93>');
    $j('.div9').find('#div93').val('before');
    $j('.div9').find('ul').append('<li>item 4</li>');
    $j('.div9').find('ul').html('<li>item 4 - html</li>');
    $j('.div9').find('ul').append('<li>item 5 - append</li>');
    $j('.div9').find('ul').prepend('<li>item 3 - prepend</li>');
    // $j('.div9').find('ul').remove();

    
    div10 = $j('.div10');
    console.log(div10);
    $j(div10).html("Teste trocando conteudo de uma variavel");
    $j(div10).append("<ul><li>item 1</li></ul>");
    $j(div10).find('ul').append("<li>item 2</li>");
    $j(div10).find('ul').append("<li>item 3</li>");
    $j(div10).find('ul li').eq(0).text('novo texto 01');
    $j(div10).find('ul li').eq(1).text('novo texto 02');

    // #11: Navegando Entre Elementos
    $j('.filha');
    console.log('filha', $j('.filha'));
    console.log('filha pai', $j('.filha').parent());
    console.log('filha pai avo', $j('.filha').parent().parent());
    console.log('site find filha', $j('.site').find('.filha'));
    console.log('site find subtopo find filha', $j('.site').find('.subtopo').find('.filha'));
    console.log('body find div.eq(0)', $j('.body').find('div').eq(0));
    console.log('conteudo parent site', $j('.conteudo').parent());
    console.log('irmao closest site', $j('.irmao').closest('.site'));
    console.log('irmao to rodape', $j('.irmao').closest('.site').find('.rodape'));



    

});

