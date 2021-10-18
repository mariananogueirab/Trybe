// Desafio 9
function encode(frase) {
  let fraseEncode = '';
  for (let key in frase) {
    if (frase[key] === 'a') {
      fraseEncode += 1;
    } else if (frase[key] === 'e') {
      fraseEncode += 2;
    } else if (frase[key] === 'i') {
      fraseEncode += 3;
    } else if (frase[key] === 'o') {
      fraseEncode += 4;
    } else if (frase[key] === 'u') {
      fraseEncode += 5;
    } else {
      fraseEncode += frase[key];
    }
  }
  return fraseEncode;
}

function decode(frase) {
  let fraseDecode = '';
  for (let key in frase) {
    if (frase[key] === '1') {
      fraseDecode += 'a';
    } else if (frase[key] === '2') {
      fraseDecode += 'e';
    } else if (frase[key] === '3') {
      fraseDecode += 'i';
    } else if (frase[key] === '4') {
      fraseDecode += 'o';
    } else if (frase[key] === '5') {
      fraseDecode += 'u';
    } else {
      fraseDecode += frase[key];
    }
  }
  return fraseDecode;
}

module.exports = {
  encode,
  decode,
};