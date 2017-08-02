console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {
	if($(document).width() > 1025) { 
				$('.show').css({'animation-delay': '0.5s', 'animation-duration': '1s'}).addClass('animated bounceIn');
				$('.zoom').css({'animation-delay': '0.5s', 'animation-duration': '1s'}).addClass('animated zoomIn');
				$('.logo-ret').css({'animation-delay': '0.3s', 'animation-duration': '0.5s'}).addClass('animated rotateIn');
				// var el = getElementById('asdasd');
				// el.style.animationDelay = '0.5s'
      }

	/////

	 var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

	
  // variables  
	
(function($) {
  
  'use strict';

  // initialize fullPage
  $('#fullpage').fullpage({		
		anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection', 'sevenSection'],
		// scrollOverflow: true,
		// slidesNavigation: true,
    navigation: true,
    onLeave: function(index, nextIndex, direction) {
			if(nextIndex == 3) {
				$('.count-number').countTo({       
        speed: 3000       
    });

				/*$('#playBtn').trigger('click');*/
			}			
      
      if(nextIndex == 2 && $(document).width() > 1025) { 
				$('.show-2').css({'animation-delay': '0.5s', 'animation-duration': '1s'}).addClass('animated bounceIn');
				$('.zoom-2').css({'animation-delay': '1s', 'animation-duration': '1.5s'}).addClass('animated zoomIn');
      }	

			if(nextIndex == 3 && $(document).width() > 1025) {			
				$('.zoom-3').css({'animation-delay': '0.5s', 'animation-duration': '1s'}).addClass('animated zoomIn');				
      }	

			if(nextIndex == 4 && $(document).width() > 1025) {			
				$('.show-4').css({'animation-delay': '0.5s', 'animation-duration': '1s'}).addClass('animated bounceIn');
				$('.zoom-4').css({'animation-delay': '1s', 'animation-duration': '1.5s'}).addClass('animated zoomIn');
      }

			if(nextIndex == 5 && $(document).width() > 1025) {			
				$('.deg').css({'animation-delay': '1s', 'animation-duration': '2s'}).addClass('animated flip');
				$('.post').css({'animation-delay': '1s', 'animation-duration': '1s'}).addClass('animated fadeIn');
      }	

				if(nextIndex == 6 && $(document).width() > 1025) {			
				$('.show-6').css({'animation-delay': '0.5s', 'animation-duration': '1s'}).addClass('animated bounceIn');
				$('.zoom-6').css({'animation-delay': '1s', 'animation-duration': '1.5s'}).addClass('animated zoomIn');
      }	

				if(nextIndex == 7 && $(document).width() > 1025) {			
				$('.down').css({'animation-delay': '2s', 'animation-duration': '2s'}).addClass('animated slideInDown');
				$('.popup-link').css({'animation-delay': '1s', 'animation-duration': '1s'}).addClass('animated bounceIn');
      }
		
    }

  });



		var popupConfig = {  
			gallery: {
				enabled: true,			
			},
			type: 'image', // this is default type
			callbacks: {
				open: function() {
					var el = $(this.content);
					var video = el.find('video')[0];
					if(video) {
						if(video.readyState == 4) {
							video.play();
						} else {
							video.oncanplay = function() {
									video.play();
							};
						}
					}
				},
			},
			items: [
				{
					src: '#v1',
					type: 'inline'
				},				       
				{
					src: 'images/img-2.jpg'
				},				  
				{
					src: 'images/img-3.jpg'
				},									
				{
					src: 'images/img-4.jpg'
				},
				
				{
					src: 'images/img-5.jpg'
				},				

				{
					src: 'images/img-6.jpg'
				},
				{
					src: '#v2',
					type: 'inline'
				},   
				{
					src: 'images/img-8.jpg'
				}				
			],
	};

	var popupLinks = $('.popup-gallery').find('.popup-link')
	popupLinks.click(function(){
		var index = popupLinks.index(this);
		$.magnificPopup.open(popupConfig, index);
	})
  
})(jQuery);

	
	
    /*$('html').smoothScroll(300);*/

	$(".nav-buttons__item").click(function( e ) {        
			$(".nav-buttons__item").removeClass("button-active")
			$(this).addClass("button-active");
			
	}); 

	//more

	if ($('html').width() < 767) {

		$('.news-text').shorten({
			showChars: 15,
		});

	}

		if ($('html').width() > 768) {

		$('.news-text').shorten({
			showChars: 60,
		});

	}

	//рулетка

	  $('.slot-1').jSlots({  
        spinner : '#playBtn_1',
				time : 4000,
        winnerNumber : 3,
				loops : 8,
				easing : 'linear' 
    });

		 $('.slot-2').jSlots({  
        spinner : '#playBtn_2',
				time : 4000,
        winnerNumber : 3,
				loops : 8,
				easing : 'linear' 
    });  

		 $('.slot-3').jSlots({  
        spinner : '#playBtn_3',
				time : 4000,
        winnerNumber : 3,
				loops : 8,
				easing : 'linear' 
    });  

		 $('.slot-4').jSlots({  
        spinner : '#playBtn_4',
				time : 4000,
        winnerNumber : 3,
				loops : 8,
				easing : 'linear' 
    });    

/*	$.jSlots.defaultOptions = {  
    number : 4,          // Number: number of slots  
    winnerNumber : 1,    // Number: list item number upon which to trigger a win, 1-based index, NOT ZERO-BASED  
    spinner : '',        // CSS Selector: element to bind the start event to  
    spinEvent : 'click', // String: event to start slots on this event  
    onStart : $.noop,    // Function: runs on spin start,  
    onEnd : $.noop,      // Function: run on spin end. It is passed (finalNumbers:Array). finalNumbers gives the index of the li each slot stopped on in order.  
    onWin : $.noop,      // Function: run on winning number. It is passed (winCount:Number, winners:Array, finalNumbers:Array)  
    easing : 'swing',    // String: easing type for final spin. I recommend the easing plugin and easeOutSine, or an easeOut of your choice.  
    time : 7000,         // Number: total time of spin animation  
    loops : 6            // Number: times it will spin during the animation
};  */


});




 








