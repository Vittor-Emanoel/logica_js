const firstName = prompt('Digite o primeiro nome:');
const lastName = prompt('Digite o segundo nome:');
const campoDeEstudo = prompt('Qual é o campo de estudo do recruta?');
const anoDeNascimento = prompt('Qual é o ano de nascimento do recruta?');

alert(
  'Recruta cadastrado com sucesso!\n' +
    '\nNome completo: ' +
    firstName +
    ' ' +
    lastName +
    '\nCampo de Estudo: ' +
    campoDeEstudo +
    '\nidade: ' +
    (2022 - anoDeNascimento)
);
