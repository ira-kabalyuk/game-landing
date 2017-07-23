console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {


    if ($('html').width() > 1025) {


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

	} 
	
	$(document).ready(function() {
		$('#fullpage').fullpage({
		navigation: true,		
		anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection', 'sevenSection', 'eightSection'],
		scrollOverflow: true,
		slidesNavigation: true	
		});
	});
   
    /*$('html').smoothScroll(300);*/

	$(".nav-buttons__item").click(function( e ) {        
			$(".nav-buttons__item").removeClass("button-active")
			$(this).addClass("button-active");
			
	});


	$('.popup-gallery').magnificPopup({  
		gallery: {
			enabled: true,			
		},

		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			
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
					src: 'images/img-5.jpg'
				},
				{
					src: '#v2',
					type: 'inline'
				},   
				{
					src: 'images/img-7.jpg'
				}				
			],
			type: 'image' // this is default type
	});

  
/*bg-video*/

	/*var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#txt button");

	if (window.matchMedia('(prefers-reduced-motion)').matches) {
			vid.removeAttribute("autoplay");
			vid.pause();
			pauseButton.innerHTML = "Paused";
	}

	function vidFade() {
		vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function()
	{
	// only functional if "loop" is removed 
	vid.pause();
	// to capture IE10
	vidFade();
	}); 


		pauseButton.addEventListener("click", function() {
			vid.classList.toggle("stopfade");
			if (vid.paused) {
				vid.play();
				pauseButton.innerHTML = "Pause";
			} else {
				vid.pause();
				pauseButton.innerHTML = "Paused";
			}
	})*/


//number animation

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
		function formatter(value, settings) {
			return value.toFixed(settings.decimals);
		}
	}(jQuery));

	jQuery(function ($) {
		// custom formatting example
		$('.count-number').data('countToOptions', {
		formatter: function (value, options) {
			return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
		});
		
		// start all the timers
		$('.timer').each(count);  
		
		function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
		}
	});

	//more

	if ($('html').width() < 767) {

		$('.news-text').shorten({
			showChars: 15,
		});

	}


});




 








