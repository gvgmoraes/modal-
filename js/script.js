$(document).ready(function(){
$('#modalBox').hide

$('#button').click(function(){
	$('#modalBox').show()
	$('#form').show()
	$('#rest').css({'opacity':'0.1'})
});

$('#rest').click(function(){
	$('#modalBox').hide()
	$('#form').hide()
	$('#rest').css({'opacity':'1'})
});

})