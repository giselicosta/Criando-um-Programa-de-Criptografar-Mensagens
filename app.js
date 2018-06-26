var newPhrase = prompt("Qual o time que você torce?");
var newPhraseCriptografada = '';
function cipher(phrase) {

var code = [];

for (var i = 0;i < phrase.length; i++) {
 var codeASCII = phrase.toUpperCase().charCodeAt(i);
 if(codeASCII <= 90){}
  var formula = ((codeASCII - 65 + 33) % 26 + 65);
 code.push(String.fromCharCode(formula));
 newPhraseCriptografada = code.toString().split(',').join('');
}

document.write("Sua mensagem criptografada: " + newPhraseCriptografada)
}
cipher(newPhrase);


function decipher(phrase) {

var code = [];

for (var i = 0;i < phrase.length; i++) {
 var codeASCII = phrase.toUpperCase().charCodeAt(i);
  var formula = ((codeASCII - 65 - 7 + 26) % 26 + 65);
 code.push(String.fromCharCode(formula));
 var newPhraseDescriptografada = code.toString().split(',').join('');
}

document.write("Sua mensagem descriptografada: " + newPhraseDescriptografada);
}

decipher(newPhraseCriptografada)
