jQuery('document').ready(function($){
	var menuB = $('.menu'),
		menu= $('.navigation ul');

/*condicional mosta o no mostra el contingut de la capçalera*/

	menuB.click(function(){

	if(menu.hasClass ('show')){
		menu.removeClass('show');
	}else{
		menu.addClass('show'); 
	}
	});
});