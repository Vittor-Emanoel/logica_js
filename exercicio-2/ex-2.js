const nomeDoVeiculo1 = prompt('Qual o nome do primeiro veiculo?')
const velocidadeDoVeiculo1 = prompt('Qual a velocidade do primeiro veiculo?')

const nomeDoVeiculo2 = prompt('Qual o nome do segundo veiculo?')
const velocidadeDoVeiculo2 = prompt('Qual a velocidade do segundo veiculo?')

if (velocidadeDoVeiculo1 > velocidadeDoVeiculo2) {
  alert('veiculo 1 é mais rápido!')
} else if (velocidadeDoVeiculo1 == velocidadeDoVeiculo2) {
  alert('Os veiculos tem a mesma velocidade!')
} else {
  alert('veiculo 2 é mais rápido')
}
