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

   $('.product-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider-nav'
       });

      $('.product-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });


   $('.slider-product-content').slick({
      infinite: true,
      arrows: true,      
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: { 
                dots: true,
                arrows: false,                                   
              }
            },

            {
              breakpoint: 540,
              settings: {                             
                slidesToShow: 1,
                slidesToScroll: 1,                             
              }
            },
        ]    
    });

   $('.slider-product-content-1').slick({
      infinite: true,
      arrows: true,      
      slidesToShow: 3,
      slidesToScroll: 1,
      accessibility: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: { 
                dots: true,
                arrows: false,                                   
              }
            },

            {
              breakpoint: 540,
              settings: {                             
                slidesToShow: 1,
                slidesToScroll: 1,                             
              }
            },
        ]    
    });


   //footer tab

    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".footer .tab_content").hide();
    $(".footer .tab_content:first").show();

  /* if in tab mode */
    $(".footer ul.tabs li").click(function() {
    
      $(".footer .tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $(".footer ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".footer .tab_drawer_heading").removeClass("d_active");
    $(".footer .tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".footer .tab_drawer_heading").click(function() {
      
      $(".footer .tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".footer .tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $(".footer ul.tabs li").removeClass("active");
    $(".footer ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('.footer ul.tabs li').last().addClass("tab_last");
  

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


  //catalog-menu

   $(".catalog-menu-list li").click(function( e ) {        
       $(".catalog-menu-list li").removeClass("menu-active")
        $(this).addClass("menu-active");
       
    });

   //mob

    // Create the dropdown base
      $("<select />").appendTo(".catalog-menu");

      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Постельное белье"
      }).appendTo(".catalog-menu select");

      // Populate dropdown with menu items
      $(".catalog-menu a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".catalog-menu select");

      });

      $(".catalog-menu select").change(function() {
        window.location = $(this).find("option:selected").val();
      }); 

  //catalog-menu-end

  // nice-select

      $(document).ready(function() {
      $('select').niceSelect();
    });

  // end nice-select 

  //left-column

  // Create the dropdown base
      $("<select />").appendTo(".page-menu");

      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Всё"
      }).appendTo(".page-menu select");

      // Populate dropdown with menu items
      $(".page-menu a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".page-menu select");

      });

      $(".page-menu select").change(function() {
        window.location = $(this).find("option:selected").val();
      }); 

  //end left-column

  //right-column

   $('.filter-mobile-menu').click( function() {
    $('.filter-list').toggleClass("is-show");

  });

   $(".filter-mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".filter-mobile-menu").toggleClass("open");
    });

    /*$(".filter-item .color-button").click(function( e ) {
        e.stopPropagation();
        $(".filter-list").removeClass("is-show");
    });  */

    //paging

     $(".paging li").click(function( e ) {        
       $(".paging li").removeClass("page-active")
        $(this).addClass("page-active");
       
    });  

    //end paging   

  //end right-column 

  //product-filter

    $('.right-btn').click(function() {       
      var count = parseInt($('.counter').text()) +1;      
      $('.counter').text(count);      
    });
  
    $('.left-btn').click(function() {      
      var count = parseInt($('.counter').text()) -1;
      if(count < 0) {
        return;
        }
      $('.counter').text(count);        
    });

  //product tab    
    
    $.fn.responsiveTabs = function() {

    return this.each(function() {
      var el = $(this),
          tabs = el.find('dt'),
          content = el.find('dd'),
          placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

      tabs.on('click', function() {
        var tab = $(this);

        tabs.not(tab).removeClass('active');
        tab.addClass('active');

        placeholder.html( tab.next().html() );
      });

      tabs.filter(':first').trigger('click');
    });

  }


  $('.responsive-tabs').responsiveTabs();

   //end product tab   

});




 








