console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,      
      focusOnSelect: true,
      arrows: true,
    });


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });    

    $('.block').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInDown',
        offset: 100
    });

    $('.slide').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated wobble',
        offset: 100
    });

    $('.in-field').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
    });

    $('.field').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 100
    });  

    $(".input-head").click(function() {        
        $(".input-list").toggleClass("in-visible");
    });

    $('html').smoothScroll(300);

    /* placeholder*/       
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){             
            $(this).attr('placeholder', placeholder);           
        });
    });
    /* placeholder*/ 

});


 








