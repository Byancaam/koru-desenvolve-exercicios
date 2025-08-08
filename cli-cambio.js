#!/usr/bin/env node
import axios from 'axios';

const valor = process.argv[2];
const moedaOrigem = process.argv[3]?.trim();
const moedaDestino = process.argv[4]?.trim();

/**
 *
 * @param {string} value - O valor da moeda a ser validado.
 * @returns {boolean} Retorna true se o código for validado,false caso contrário.
 */
function isValidCurrency(value) {
  return /^[a-zA-Z]{3}$/.test(value);
}

/**
 *
 * @param {string} value - O valor numérico em formato string a ser validado
 * @returns {boolean} Retorna true se o valor tiver duas casas decimais, fale caso contrário.
 */

function hasMaxTwoDecimals(value) {
  return /^\d+(\.\d{1,2})?$/.test(value);
}

async function fetchCurrencyConverter(value, moedaOrigem, moedaDestino) {
  try {
    const resultado = await axios.get(
      `https://api.frankfurter.app/latest?amount=${value}&from=${moedaOrigem}&to=${moedaDestino}`
    );
    const { rates } = resultado.data;
    const convertedValue = rates[moedaDestino];
    console.log(
      `O valor ${value} ${moedaOrigem} convertido para ${moedaDestino} é de`,
      convertedValue.toFixed(2)
    );
  } catch (err) {
    console.log('Erro:', err);
  }
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

fetchCurrencyConverter(
  valor,
  moedaOrigem.toUpperCase(),
  moedaDestino.toUpperCase()
);
