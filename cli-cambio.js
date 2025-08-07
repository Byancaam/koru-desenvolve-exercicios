#!/usr/bin/ env node

const valor = process.argv[2];
const moedaOrigem = process.argv[3];
const moedaDestino = process.argv[4];

function isValidCurrency(code) {
  return /^[a-zA-Z]{3}$/.test(code);
}

if (!valor || isNaN(valor)) {
  console.log('⚠️  É necessário informar um valor numerico para conversão!');
  process.exit(1);
}

if (!moedaOrigem || !isValidyCurrency(moedaOrigem)) {
  console.log('⚠️  É necessário informar a moeda de origem a ser convertida!');
  process.exit(1);
}

if (!moedaDestino || !isValidyCurrency(moedaDestino)) {
  console.log('⚠️  É necessário informar a moeda de destino para a conversão!');
  process.exit(1);
}

console.log(valor);
console.log(moedaOrigem);
console.log(moedaDestino);
