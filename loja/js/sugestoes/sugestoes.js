$("input[type=button]").click(function(event){
	var inputSugestao = $("input[type=text]");
	
	var sugestoes = inputSugestao.val();
	
	var nomeSugestao = $("<span>").addClass("sugestao").text(sugestoes);
	
	var votos = $("<span>").addClass("votos").text("1 votos");
	
	$("<li>").append(nomeSugestao).append(votos).appendTo(".sugestoes");
	
	inputSugestao.val("").focus();
	
	
});


$(".sugestoes").on("dblclick","li",function(event) {
	$(this).remove();
});


$("input[type=text]").autocomplete({
	source: function(entrada, responsta) {
		var sugestoesParecidas = [];
		
		var novaSugestao = new RegExp(entrada.term, "i");
		
		$(".sugestao").each(function(){
			var sugestaoExistente = $(this).text();
			
			if(sugestaoExistente.match(novaSugestao)){
				 sugestoesParecidas.push(sugestaoExistente);
			}
		});
		
		responsta(sugestoesParecidas);
		
		
	}
	
	
});

