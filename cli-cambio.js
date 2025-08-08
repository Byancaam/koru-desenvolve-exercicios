#!/usr/bin/ env node

const valor = process.argv[2];
const moedaOrigem = process.argv[3]?.trim();
const moedaDestino = process.argv[4]?.trim();

function isValidCurrency(code) {
  return /^[a-zA-Z]{3}$/.test(code);
}

function hasMaxTwoDecimals(valor) {
  return /^\d+(\.\d{1,2})?$/.test(valor);
}

if (!valor || isNaN(valor) || valor <= 0 || !hasMaxTwoDecimals(valor)) {
  console.log(
    '⚠️  Insira um valor positivo, diferente de zero e com no máximo duas casas decimais para a operação de conversão de câmbio!'
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
