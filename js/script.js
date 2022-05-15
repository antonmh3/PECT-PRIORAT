jQuery('document').ready(function($){
	var menuB = $('.menu'),
		menu= $('.navigation ul');

	menuB.click(function(){

	if(menu.hasClass ('show')){
		menu.removeClass('show');
	}else{
		menu.addClass('show'); 
	}
	});
});