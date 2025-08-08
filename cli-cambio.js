#!/usr/bin/ env node

const valor = process.argv[2];
const moedaOrigem = process.argv[3];
const moedaDestino = process.argv[4];

function isValidCurrency(code) {
  return /^[a-zA-Z]{3}$/.test(code);
}

if (!valor || isNaN(valor)) {
  console.log('⚠️  É necessário informar um valor numérico para conversão!');
  process.exit(1);
}

if (!moedaOrigem || !isValidCurrency(moedaOrigem)) {
  console.log(
    '⚠️  É necessário informar um valor válido moeda de origem a ser convertida! - Ex: USD, BRL'
  );
  process.exit(1);
}

if (!moedaDestino || !isValidCurrency(moedaDestino)) {
  console.log(
    '⚠️  É necessário informar um valor válido moeda de destino para a conversão! - Ex: USD, BRL'
  );
  process.exit(1);
}

console.log(valor);
console.log(moedaOrigem);
console.log(moedaDestino);
