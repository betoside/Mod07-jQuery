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

    // #12: CSS, Styling e Dimensões
    $j('.div12').find('h1').addClass('fundo-vermelho');
    console.log('verificar class', $j('.div12').find('h1').hasClass('fundo-vermelho'));
    $j('.div12').find('h1').removeClass('fundo-vermelho');
    console.log('verificar class', $j('.div12').find('h1').hasClass('fundo-vermelho'));
    $j('.div12').find('h1').css('color','red');
    $j('.div12').find('h1').css('font-size','18px');

    // #13: Guardando dados em um elemento
    $j('.div13')
    // < S [<div class="div13">] (1)
    $j('.div13 h2')
    // < S [<h2>] (1)
    $j('.div13 input')
    // < S [<input type="text">] (1)
    $j('.div13 button')
    // < S [<button>] (1)
    $j('.div13 input').data('idade', 46)
    // < S [<input type="text">] (1)
    $j('.div13 input').data()
    // < {idade: 46}
    $j('.div13 input').val()
    // < "alberto"
    $j('.div13 input').val().length
    // < 7
    $j('.div13 input').data('qtdCaracteres', $j('.div13 input').val().length)
    // < S [<input type="text">] (1)
    $j('.div13 input').data('qtdCaracteres')
    // < 7
    console.log('ver o INSPECT');


    // #14: Métodos do dia-a-dia
    div14outro = $j.trim( $j('.div14 .texto').html() )
    // < "Esse é um texto para exemplo"
    console.log(div14outro);
    // < "Esse é um texto para exemplo"

    $j('.div14 li')
    // < S [<li>, <li>, <li>] (3)
    $j('.div14 li').each(function(){
        console.log($j(this).html())
    })
    // [Log] item 1
    // [Log] item 2
    // [Log] item 3
    // < S [<li>, <li>, <li>] (3)
    // $j('.div14 li').each(
    //     console.log($j(this).html())
    // )
    // TypeError: undefined is not an object (evaluating 't.createDocumentFragment')

    div14idade = 46
    // < 46
    $j.type(div14idade)
    // < "number"
    div14nome = 'betao'
    // < "betao"
    $j.type(div14nome)
    // < "string"
    typeof div14idade
    // < "number"
    typeof div14nome
    // < "string"
    $j.isNumeric(div14idade)
    // < true
    // $j.isArray
    // $j.isFunction
    // $j.is ETC ...

    // console.log('teste');

    // #15: FAQ: Como saber se um elemento existe?
    if( $j('.div15').length > 0 ){
    console.log('existe')
    } else {
    console.log('nao existe')
    }
    //    [Log] existe

    // #16: FAQ: Saber se elemento tem uma classe
    if( $j('.div16 input').hasClass('qqCoisa16') ){
        console.log('tem CLASS')
       }
       else
          {
        console.log('nao tem CLASS')
       }
    //    [Log] nao tem CLASS

    // #17: FAQ: Ativar/Desativar um elemento de form
    $j('.div17 input[type=text]').attr('disable', 'disabled')
    // < S [<input type="text">] (1)
    $j('.div17 input[type=text]').attr('disabled', 'disabled')
    // < S [<input type="text">] (1)

    $j('.div17 input[type=checkbox]').prop('checked', true);
    // < S [<input type="checkbox">] (1)
    $j('.div17 input[type=checkbox]').prop('checked', false);
    // < S [<input type="checkbox">] (1)

    // #18: FAQ: Pegar item selecionado de SELECT
    $j('.div18 button').click(function(){
        //console.log('hey')
        $j('.div18 input').val($j('.div18 select').val())
    })

    // #19: FAQ: Alterar 3o elemento de lista
    $j(".div19 button").click(function () {
      if ($j(".div19 input").val() != "") {
        $j(".div19 li").eq(2).html($j(".div19 input").val()).css('color','blue');
      } else {
        $j(".div19 li").eq(2).text("Digite alguma coisa").css('color','red');
      }
    });


    // #20: FAQ: Pegar elemento nativo
    $j('.div20 ul li').eq(1)[0];
    console.log($j('.div20 ul li').eq(1)[0]);
    // <li>item 20 2</li>
        
    // #22: Definindo Eventos em Elementos DOM
    $j(".div22 button").click(function () {
      alert("clicou");
      console.log($j(this).parent());
      $j(this).parent().toggleClass("bg-vermelho");
    });

        // #23: Eventos Auxiliadores
        $j('.div23').hover(
            function() {
                $j(this).addClass('bg-vermelho');
            },
            function() {
                $j(this).removeClass('bg-vermelho');
            }
        );
        $j('.div231').hover(
            function() {
                $j(this).toggleClass('bg-vermelho');
            }
        );

        // #24: Removendo Eventos
        $j('.div24 .add').on('click',function(){
            $j('.div24 .strong242').css('cursor','pointer');
            $j('.div24 .strong242').bind('click', function(){
                alert('Clicou')
            });
        });
        $j(".div24 .delete").on("click", function () {
          $j(".div24 .strong242").unbind("click");
          $j(".div24 .strong242").css("cursor", "default");
        });

});

