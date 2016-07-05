
//Change the main page when 
$(document).ready(function(){
	$("#about").click(function(){
		$("#information").load("pages/about.html");
	});
});
$(document).ready(function(){
	$("#characters").click(function(){
		$("#information").load("pages/characters.html");
	});
});
$(document).ready(function(){
	$("#world").click(function(){
		$("#information").load("pages/world.html");
	});
});
$(document).ready(function(){
	$("#news").click(function(){
		$("#information").load("pages/news.html");
	});
});
$(document).ready(function(){
	$("#comic").click(function(){
		$("#information").load("pages/comic.html");
	});
});
$(document).ready(function(){
	$("#galary").click(function(){
		$("#information").load("pages/gallery.html");
	});
});

//url changing
$(function(){
	var originalTitle=document.title
	function hashChange(){
		var page=location.hash.slice(1)
		if (page!=""){
			$('#information').load("pages/"+page+".html")
			document.title=originalTitle+' – '+page
		}
	}
		if ("onhashchange" in window){ // cool browser
			$(window).on('hashchange',hashChange).trigger('hashchange')
		}else{ // lame browser
			var lastHash=''
			setInterval(function(){
				if (lastHash!=location.hash)
					hashChange()
				lastHash=location.hash
			},100)
		}
	})

function firstPage(){
	window.page=1;
}