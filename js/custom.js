// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$("#aumentar").click(function (){
    $("*").css("font-size", function(i, value) {
        return parseInt(value) + 1.1;
    });
});
$("#diminuir").click(function (){
    $("*").css("font-size", function(i, value) {
        return parseInt(value) - 1.1;
    });
});