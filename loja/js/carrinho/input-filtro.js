/*
var inputs = document.querySelectorAll("#carrinho input");

for(var i = 0; i<inputs.length; i++){
	inputs[i].addEventListener("input", function(event){
		var naoNumericos = /\D/g;
		if(naoNumericos.test(this.value)){
			this.value = this.value.replace(naoNumericos, "");
		}
	});
	
}
*/
// Segunda forma de implementar
var $ul = document.querySelector("#carrinho");

$ul.addEventListener("input",function(event){
		var tag = event.target;
	
		if(tag.tagName == "INPUT"){
			var naoNumericos = /\D/g;
			tag.value = tag.value.replace(naoNumericos, "");
		}
});
	
