function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if( creditCardNumber == undefined){
      return "Ingresa un numero";
    }
    if(typeof (creditCardNumber) !== 'number'){
      return "Error de dato";
    }
    if(creditCardNumber.toString().length != 16){
      return "Faltan numeros";
    }



}




// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
