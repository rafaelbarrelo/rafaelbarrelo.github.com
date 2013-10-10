$(document).ready(function(){
	$('#habilidades').hide();
	$('#formacao').hide();
	$('#contato').hide();
});

(function($) {
	"use strict";
	$(function() {
	
		$(window).konami({
			cheat: function() {
				$('#habilidades').show('slow');
				$('#formacao').show('slow');
				$('#contato').show('slow');
				$('#dica').hide();
			} // end cheat
		});
		
	});
}(jQuery));