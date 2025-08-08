#!/usr/bin/ env node

const valor = process.argv[2];
const moedaOrigem = process.argv[3];
const moedaDestino = process.argv[4];

function isValidCurrency(code) {
  return /^[a-zA-Z]{3}$/.test(code);
}

if (!valor || isNaN(valor) || valor <= 0) {
  console.log(
    '⚠️  Insira um valor positivo e diferente de zero para o valor a ser convertido!'
  );
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

if (moedaOrigem === moedaDestino) {
  console.log(
    '⚠️  O tipo da moeda de origem é igual ao da moeda de destino, tente novamente!'
  );
  process.exit(1);
}

console.log(valor);
console.log(moedaOrigem);
console.log(moedaDestino);
