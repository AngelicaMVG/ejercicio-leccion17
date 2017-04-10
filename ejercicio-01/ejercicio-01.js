function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == undefined){
      return "Ingresa un numero";
    }
    if(creditCardNumber !== Number){
      return "Error de dato";
    }
    if(digitos(creditCardNumber) != true){
      return "Faltan numeros";
    }


}

function digitos(creditCardNumber){
    var numero = creditCardNumber.toString();
    if(numero.length == 16){
        return(true);
    }
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
