#!/usr/bin/ env node

const valor = process.argv[2];
const moedaOrigem = process.argv[3]?.trim();
const moedaDestino = process.argv[4]?.trim();

/**
 *
 * @param {string} valor - O valor da moeda a ser validado.
 * @returns {boolean} Retorna true se o código for validado,false caso contrário.
 */
function isValidCurrency(valor) {
  return /^[a-zA-Z]{3}$/.test(code);
}

/**
 *
 * @param {string} valor - O valor numérico em formato string a ser validado
 * @returns {boolean} Retorna true se o valor tiver duas casas decimais, fale caso contrário.
 */

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
