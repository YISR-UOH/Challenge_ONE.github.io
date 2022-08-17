/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
let copy="";

const rules = {
  a:"ai",
  e:"enter",
  i:"imes",
  o:"ober",
  u:"ufat",
  ai:"a",
  enter:"e",
  imes:"i",
  ober:"o",
  ufat:"u"
};
function result(x) {

  let element= document.getElementById("result");
  element.innerHTML = x;

}

function encrypt() {
  let x = (document.getElementById('text').value).toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");
  x = x.replace(/a|e|i|o|u/gi, 
  function(matched){
    return rules[matched];
  });
  result(x);
}
function desencrypt() {
  let x = (document.getElementById('text').value).toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");
  x = x.replace(/ai|enter|imes|ober|ufat/gi, 
  function(matched){
    return rules[matched];
  });
  result(x);
}
function copiar(){
  let element= document.getElementById("result").value;
  navigator.clipboard.writeText(element)
}

