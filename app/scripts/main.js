console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {


    if ($('html').width() > 1025) {


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

	} 
	
	$(document).ready(function() {
		$('#fullpage').fullpage();
	});
   
    /*$('html').smoothScroll(300);*/    
    


/*
   $(".catalog-menu-list li").click(function( e ) {        
       $(".catalog-menu-list li").removeClass("menu-active")
        $(this).addClass("menu-active");
       
    });*/

  
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


     

});




 








