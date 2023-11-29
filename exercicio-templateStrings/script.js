//feito no onecompiler.com
//copie todo o codigo apartir da linha 3: e cole no onecompiler
/*
Acesse o site OneCompiler (link em anexo) e
crie uma função que recebe dois números como parâmetros
e imprime quatro frases no terminal (a partir de template strings)
demonstrando as quatro operações básicas aplicadas a ambos números.
Exemplo:

4 + 5 = 9
4 - 5 = -1
4 x 5 = 20
4 / 5 = 0.8
*/
function calcular(numA, numB) {
  //demonstrando as quatro operações básicas aplicadas a ambos números.
  let soma = numA + numB;
  let subt = numA - numB;
  let mult = numA * numB;
  let divi = numA / numB;

  //imprime quatro frases no terminal (a partir de template strings)
  console.log(`A soma de ${numA} e ${numB} é: ${soma}`);
  console.log(`A subtração de ${numA} e ${numB} é: ${subt}`);
  console.log(`A multiplicação de ${numA} e ${numB} é: ${mult}`);
  console.log(`A divisão de ${numA} e ${numB} é: ${divi}`);
}

//crie uma função que recebe dois números como parâmetros
calcular(4, 5);
