const entrada1 = prompt('Digite um primeiro número: ');
const entrada2 = prompt('Digite um segundo número: ');

//função que transforma string em number

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtração = x - y;
const multiplicação = x * y;
const divisão = x / y;

alert(
  'Calculadora de 4 Operações:\n' +
    '\nSOMA: ' +
    soma +
    '\nSUBTRAÇÃO: ' +
    subtração +
    '\nMULTIPLICAÇÃO: ' +
    multiplicação +
    '\nDIVISÃO: ' +
    divisão
);
