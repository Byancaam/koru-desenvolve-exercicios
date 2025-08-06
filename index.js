function somarDoisNumeros(...numeros) {
  if (numeros.length !== 2) {
    console.log('Forneça dois números!');
    return;
  }

  const [numero1, numero2] = numeros;
  return numero1 + numero2;
}

const valores = [11, 20];
const resultado = somarDoisNumeros(...valores);

console.log(`Soma: ${resultado}`);
