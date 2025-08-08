# CLI Câmbio 💱

Ferramenta de linha de comando para converter valores entre moedas usando a API [Frankfurter](https://www.frankfurter.app/).

---

## Como usar 🚀

### Requisitos ✅

- Node.js instalado
- Conexão com internet para acessar a API
-

### Executando 🖥️

No terminal, rode o comando:

```bash
node  cli-cambio.js  <valor>  <moedaOrigem>  <moedaDestino>
```

- <valor>: Valor numérico positivo a ser convertido (ex: 10.50)
- <moedaOrigem>: Sigla da moeda de origem com 3 letras (ex: USD, EUR, BRL)
- <moedaDestino>: Sigla da moeda de destino com 3 letras (ex: USD, EUR, BRL)

**Exemplo**

```bash
node cli-cambio.js 10 EUR BRL
```

**Saída esperada** 💰

```bash
O valor 10 EUR convertido para BRL é de 63.58
```

**Validações** ⚠️

- Valor deve ser numérico, positivo, maior que zero e com até duas casas decimais
- Moedas devem ser siglas com 3 letras (ex: USD, EUR, BRL)
- Moeda de origem e destino não podem ser iguais

## Tecnologias utilizadas 🛠️

- Node.js
- Axios para requisições HTTP
- API Frankfurter para cotações de câmbio

## Como contribuir 🤝

Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença 📄

MIT License
