   	var iframe = document.getElementById("mainIframe"); 
	iframe.onload = function(){ 
		setTimeout('$(".loadcover").hide()',300);
	}; 
    document.write('<div class="loadcover"><img src="./images/loading2.gif"></div>');