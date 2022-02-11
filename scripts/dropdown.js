$(document).ready(function() {    
    $('.articleContent').each(function(){
        //Inicio do script para o componente
        var boxeAbertura = $('.container_boxe_abertura');
        boxeAbertura.on('click', function(){
            console.log('02');
            var randomId = Math.floor(Math.random() * 100000) + 1;
            
            if($(this).find('input').attr('id').length == "0") {
                console.log('ID alterado');
                $(this).find('input').attr('id', randomId);
            } else {
                console.log('Ja contem ID');
            }
            
            if($(this).find('label').attr('for').length == "0") {
                console.log('FOR alterado');
                $(this).find('label').attr('for', randomId);
            } else {
                console.log('Ja contem FOR');
            }
        });
        //Fim do script para o componente
    });    
});
