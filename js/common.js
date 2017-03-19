$(document).ready(function() {
	$(".mc_item_wrap ul").each(function(){
	$(this).after("<div class='mc_item_wrap_af'></div>");
});
	$(".mc_toggle").click(function(){
		if ($(this).parent().parent().children("ul").is(":visible")){
			$(this).parent().parent().children("ul").slideUp();
			$(this).parent().parent().children(".mc_item_wrap_af").slideUp();
		} else {
			$("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
			$(".mc_item_wrap").removeClass("active");
			$(this).parent().parent().addClass("active");
			$(this).parent().parent().children("ul").slideToggle();
			$(this).parent().parent().children(".mc_item_wrap_af").slideToggle();
		}
	});

	
	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".hi_item, .sb_content > div"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});
	

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	
});