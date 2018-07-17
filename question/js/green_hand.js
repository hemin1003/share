$(function() {
	function showtab() {
		var turn = 1;
		var turn2 = [];
		var text = null;
		$(".nov_list_img").parent().click(function() {
			// console.log($(this).attr('data-tops'));
			// $('html,body').animate({scrollTop:$(".border_top").offset().top},'slow');
			// 判断两次点击是否是同一个元素
			text = $(this).index();
			turn2.push(text);
			if(turn2[turn2.length-2] != turn2[turn2.length-1]) {
				turn = 1;
			}			
			// $(".nov_list_img").css("transform","rotate(0deg)");
			// $(".nov_list_img").parent().next().slideUp(300);
			if(turn == 1) {
				if($(this).next().css('display') == 'block') {
					$(this).find(".nov_list_img").css("transform","rotate(0deg)");
					$(this).next().slideUp(300);
					turn =1
				}else {
					$(this).find(".nov_list_img").css("transform","rotate(180deg)");
					$(this).next().slideDown(300);
					turn = 0;
				}
			}else {
				$(this).find(".nov_list_img").css("transform","rotate(0deg)");
				$(this).next().slideUp(300);
				turn = 1;
			}
		});
	}
	showtab();
})