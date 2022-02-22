$(document).ready(function() {
    //[variables] btn close for popup and popup center

    if (location.href.indexOf('file') != -1) {
        
        fullPopup();
        centerPopup();
        videoPopup();
        
    } else {        
        console.log('rodando na wooding');
    }   
});

function fullPopup() {   
    var popup = $('.image_popup');
    var btnCloseModal = $('.image_popup .image_popup__content a');

    popup.addClass('__ready');

    $('.articleContent').each(function(){
        var triggerPopup = $('.trigger_popup'); 

        triggerPopup.on('click', function(){
            popup.addClass('popup_actived');
        });        

        btnCloseModal.on('click', function(){
            popup.removeClass('popup_actived');
        });
    });
}

function centerPopup() {
    var btnCloseModalCenter = $('.image_popup_center .image_popup__content a');
    var popupCenter = $('.image_popup_center');    

    popupCenter.addClass('__ready');

    $('.articleContent').each(function(){
        popupCenter.on('click', function(){
            $(this).addClass('popup_actived');
        }); 

        btnCloseModalCenter.on('click', function(){
            popupCenter.removeClass('popup_actived');
            return false;
        });
    });
}

function videoPopup() {
    var popupVideo = $('.video_popup_center');
    var btnCloseModalVideoCenter = $('.video_popup_center .video_popup__content a');
    var novoDescVideo = $('.video_popup__text').text()
        .replace("{{link=", "<b style='display:none'>").replace('=link}}', '</b>')
        .replace("{{h2=", " <h2>").replace('=h2}}', '</h2>')    
        .replace("{{p=", " <p>").replace('=p}}', '</p>');
        
    $('.video_popup__text').empty();
    $('.video_popup__text').append(novoDescVideo);

    var urlVideo = $('.video_popup__text b').text();
    console.log(urlVideo);
    var playerDefault = $('#playerDefault');
    var playerYoutube = $('#playerYoutube');
    var iframeYoutube = $('#playerYoutube iframe');

    var screem = $(window).height() - 150;

    $('.video_popup_center').addClass('__ready');

    $('.articleContent').each(function(){
        if(urlVideo.indexOf("youtube")>-1 ) {
            console.log('é video do youtube');
            playerYoutube.addClass('show');
            iframeYoutube.attr('src', urlVideo);
            iframeYoutube.attr('height', screem);

        } else {
            console.log('qualquer outro video');
            playerDefault.addClass('show');
            playerDefault.html("<source src='" + urlVideo + "' type='video/mp4' />");
        }

        popupVideo.on('click', function(){
            $(this).addClass('popup_actived');
        }); 

        btnCloseModalVideoCenter.on('click', function(){
            popupVideo.removeClass('popup_actived');
            return false;
        });
    });
}
