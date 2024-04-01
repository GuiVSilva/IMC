const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
  //não atualizar a pagina
  event.preventDefault()

  const weight = document.getElementById('weight').value
  const height = document.getElementById('height').value

  const imc = (weight / (height * height)).toFixed(2)

  const value = document.getElementById('value')
  let description = ''

  value.classList.add('attention')

  document.getElementById('info').classList.remove('hidden')

  if (imc < 18.5) {
    description = 'Abaixo do peso!'
  } else if (imc >= 18.5 && imc <= 25) {
    description = 'Peso ideal!'
    value.classList.remove('attention')
    value.classList.add('normal')
  } else if (imc > 25 && imc <= 30) {
    description = 'Sobrepeso!'
  } else if (imc > 30 && imc <= 35) {
    description = 'Obesidade moderado!'
  } else if (imc > 35 && imc <= 40) {
    description = 'Obesidade severa!'
  } else {
    description = 'Obesidade morbida!'
  }

  //mostrar o valor
  value.textContent = imc.replace('.', ',')
  //mostrar o texto
  document.getElementById('description').textContent = description
})
