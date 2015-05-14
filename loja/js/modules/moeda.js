/*

function numberParaReal(numero) {
	return "R$ " + numero.toFixed(2).replace(".", ",");
}

function realParaNumber(texto) {
	return parseFloat(texto.replace("R$ ", "").replace(",", "."));
}

*/
var formatadorMoeda = {
		simbolo: "R$ ",
		numberParaReal:function (numero) {
			return this.simbolo + numero.toFixed(2).replace(".", ",");
		},
		
		realParaNumber:function (texto) {
			return parseFloat(texto.replace(this.simbolo, "").replace(",", "."));
		},
		
		
}