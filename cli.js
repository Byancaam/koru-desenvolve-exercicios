#!/usr/bin/env node
import axios from 'axios';

const cep = process.argv[2];
const cepRegex = /^[0-9]{8}$/;

if (!cep) {
  console.log('⚠️  É necessário informar um CEP.');
  process.exit(1);
}

if (!cepRegex.test(cep)) {
  console.log(
    '❌ Erro: Cep inválido. Use apenas 8 números sem traços e espaços'
  );
  process.exit(1);
}

//Busca cep usando o fetch
/*
async function buscaCep(cep) {
  try {
    const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resultado.json();
    console.log(dados);
  } catch (erro) {
    console.log('Erro: ', erro);
  }
}
*/

//Busca cep usando o axios

async function buscaCep(cep) {
  try {
    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const {
      cep: cepFormatado,
      logradouro,
      bairro,
      localidade,
      uf,
      ddd,
    } = resposta.data;
    console.log(`📦 Resultado da busca: 
      CEP: ${cepFormatado}
      Logradouro: ${logradouro}
      Bairro: ${bairro}
      Localidade: ${localidade}
      Estado: ${uf}
      DDD: ${ddd}
      `);
  } catch (erro) {
    console.log('Erro: ', erro.message);
  }
}

console.log(`🔍 Buscando informações para o CEP: ${cep}...`);
buscaCep(cep);
