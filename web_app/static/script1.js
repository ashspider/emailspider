
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
          $(".home-menu").css("background" , "#2d3e50");
          $(".home-menu").css("color","#fff");
          $(".home-menu a").css("color","#fff");
	    
	  }

	  else{
		$(".home-menu").css("background" , "white");
        $(".home-menu").css("color","#2d3e50");
        $(".home-menu a").css("color","#2d3e50");
        
	  }
  })
})