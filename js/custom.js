// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

var min=8;
var max=24;


$(document).ready(function() {
	var h1Original = "100px";
	var headerPoriginal = "18px";
	//var h3Original = "40px";
	var pOriginal = "16px";
	var h2Original = "30px";
}); 


function aumentar() {
	 
	  var headerP = $("header .header-content .header-content-inner p").css('font-size');
	  headerP =  parseInt(headerP.replace("px","")); 
	  headerP += 1;
	  headerP = headerP+"px";
	  $("header .header-content .header-content-inner p").css("fontSize", headerP);

      var h1 = $("header .header-content .header-content-inner h1").css('font-size');
	  h1 =  parseInt(h1.replace("px","")); 
	  h1 += 1;
	  h1 = h1+"px";
	  $("header .header-content .header-content-inner h1").css("fontSize", h1);

	  //var h3 = $(".promo-item h3").css('font-size');
	  //h3 =  parseInt(h3.replace("px","")); 
	  //h3 += 1;
	  //h3 = h3+"px";
	  //$(".promo-item h3").css("fontSize", h3);

	  var h2 = $("h2").css('font-size');
	  h2 =  parseInt(h2.replace("px","")); 
	  h2 += 1;
	  h2 = h2+"px";
	  $("h2").css("fontSize", h2);

	  var p = document.getElementsByTagName('p');


		for(i=0;i<p.length;i++) {
			if(p[i].style.fontSize) {
				var s = parseInt(p[i].style.fontSize.replace("px",""));
			} else {
				var s = 16;
			}
			if(s!=max) {
				s += 1;
			}
			p[i].style.fontSize = s+"px"
		}
	 
}
function diminuir() {
	var headerP = $("header .header-content .header-content-inner p").css('font-size');
	headerP = parseInt(headerP.replace("px", ""));
	headerP -= 1;
	headerP = headerP + "px";
	$("header .header-content .header-content-inner p").css("fontSize", headerP);

	var h1 = $("header .header-content .header-content-inner h1").css('font-size');
	h1 = parseInt(h1.replace("px", ""));
	h1 -= 1;
	h1 = h1 + "px";
	$("header .header-content .header-content-inner h1").css("fontSize", h1);

	var h2 = $("h2").css('font-size');
	h2 = parseInt(h2.replace("px", ""));
	h2 -= 1;
	h2 = h2 + "px";
	$("h2").css("fontSize", h2);

	var p = document.getElementsByTagName('p');


	for (i = 0; i < p.length; i++) {
		if (p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("px", ""));
		} else {
			var s = 16;
		}
		if (s != max) {
			s -= 1;
		}
		p[i].style.fontSize = s + "px"
	}
}

function normal() {
    var p = document.getElementsByTagName('p');
    for(i=0;i<p.length;i++) {
        p[i].style.fontSize = "16px";
        
    }
	
    
	$("header .header-content .header-content-inner h1").css("fontSize", h1Original);
	$("header .header-content .header-content-inner p").css("fontSize", headerPoriginal);
	$("h2").css("fontSize", h2Original);
}