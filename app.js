var newPhrase = prompt("Qual o time que você torce?");


function cipher (Phrase) {

var newarray = [];
var formula = [];
var code = [];
var deslocamento ="";

for (var i = 0;i < newPhrase.lenght; i++){
codeASCSII = newPhrase.toUpper.case().charcodAt (i);
formula = ((CodeASCSII - 65 + 33) % 26 + 65);
code = String.fromCharCode(formula);
var newPhraseCriptografada = deslocamento += code;
console.log(newPhraseCriptografada);

  }
  alert(newPhraseCriptografada);
  return newPhaseCriptografada;
}
cipher(newPhrase);

function decipher (phrase) {

var newarray = [];
var formula = [];
var code = [];
var deslocamento ="";

for (var i = 0;i < phrase.length; i++){
codeASCSII = phrase.toUpperCase().charCodeAt(i);
formula = ((codeASCSII + 65 - 33) % 26 + 65);
code = String.fromCharCode(formula);
deslocamento += code;
  }
  alert(deslocamento);
  return(deslocamento);

}
