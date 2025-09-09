$(document).ready(function(){
	//Modal
	$('.modal').modal('hide');
	$('.figure-img>a').click(function(event){
		event.preventDefault();
		var img = $(this).attr('src');
		$('.pop-img').attr('src', img);
		$('.modal').show();
	})
	// Modal show-hide
	$('.modal .close').click(function(){
		$('.modal').hide();
	})
		$(window).scroll(function(){
			if($(this).scrollTop() > 3){
				$('.mouse').fadeOut(50);
			}else{
				$('.mouse').fadeIn();
			}
		})
});
	
	