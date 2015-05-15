(function($) {
	"use strict";
	
	$.fn.inputNumerico = function(selector) {
		return this.on("input", selector,function(event) {
			alert("aqui");
			var naoNumeros = /\D/g;
			if(naoNumeros.test(this.value)){
				this.value = this.value.replace(naoNumeros, "");
				$(this).trigger('input');
			}
			
		});
	};
	
})(jQuery);