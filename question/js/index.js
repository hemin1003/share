$(function() {
	function iphone() {
		var u = navigator.userAgent;
		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
			
		} else if (u.indexOf('iPhone') > -1) {//苹果手机
			$(".novice_list_spical").hide();
		} else if (u.indexOf('Windows Phone') > -1) {//winphone手机
		// alert("winphone手机");
		// window.location.href = "mobile/index.html";
		}
	}
	iphone();
	$(".title_que").click(function() {
		$(".title_que").removeClass("active_que");
		$(this).addClass("active_que");
	});
	$(".title_list a").click(function () {
	    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -0+ "rem"}, 500);
	    return false;
	});
	function showtab() {
		var turn = 1;
		var turn2 = [];
		var text = null;
		$(".nov_list_img").parent().click(function() {
			// 判断两次点击是否是同一个元素
			text = $(this).index();
			turn2.push(text);
			if(turn2[turn2.length-2] != turn2[turn2.length-1]) {
				turn = 1
			}			
			
			$(".nov_list_img").css("transform","rotate(0deg)");
			$(".nov_list_img").parent().next().slideUp(300);
			if(turn == 1) {
				$(this).find(".nov_list_img").css("transform","rotate(180deg)");
				$(this).next().slideDown(300);
				// console.log($(this).parent().next().text())
				turn = 0;
			}else {
				$(this).find(".nov_list_img").css("transform","rotate(0deg)");
				$(this).next().slideUp(300);
				turn = 1;
			}
		});
	}
	showtab();
	// //初始化智齿咨询组件实例
	// var zhiManager = (getzhiSDKInstance());
	// //再调用load方法
	// zhiManager.on("load", function() {
	//     zhiManager.initBtnDOM();
	// });
})