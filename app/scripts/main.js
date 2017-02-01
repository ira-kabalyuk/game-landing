console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

   $('.head-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
    });

   if ($('html').width() < 767) {

    $('.responsive-slider').slick({
      infinite: true,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
    });

   }

   $('.slider-content').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      accessibility: false,

        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,               
              }
            },

            {
              breakpoint: 767,
              settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,               
              }
            },
        ]    
    });

   //footer tab

    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");
  

   //end footer tab


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });    

   
    /*$('html').smoothScroll(300);*/

    /* placeholder*/       
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){             
            $(this).attr('placeholder', placeholder);           
        });
    });
    /* placeholder*/ 

    //nav

   $('.mobile-menu').click( function() {
    $('nav ul').toggleClass("showing");

  });

   $(".mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".mobile-menu").toggleClass("is-open");
    }); 

  //nav end 

  //cart

  $(".cart-block").click(function( e ) {
        e.stopPropagation();
        $(".cart").toggleClass("is-emersione");
    }); 


    $("body").click(function(e) { 
      var div = $(".cart"); 
      if (!div.is(e.target) 
          && !div.has(e.target).length) { 
        div.removeClass("is-emersione"); 
      }
    });

 //cart button

  $(".delete-link").click(function( e ) {       
       $(this).parents(".cart-item").addClass("is-close");
    });

  $(".icon-cart-close").click(function( e ) {       
       $(this).parents(".cart-item").addClass("is-close");
    });





    $('.button2').click(function() {       
      var count = parseInt($('.counter').text()) +1;      
      $('.counter').text(count);      
    });
  
    $('.button1').click(function() {      
      var count = parseInt($('.counter').text()) -1;
      if(count < 0) {
        return;
        }
      $('.counter').text(count);        
    });   

});




 








