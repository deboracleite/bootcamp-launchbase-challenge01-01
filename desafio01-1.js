// Desafio 1 
//Calculo IMC

const nomeIMC = 'Debora'
const peso = 59
const altura = 1.61

const imc = peso/ (altura * altura)

if(imc >=30){
    console.log(`${nomeIMC} você está acima do peso.`)
}
if(imc <29.9){
    console.log(`${nomeIMC} você não está acima do peso.`)
}

// Calculo Aposentadoria

const nomeAps = 'Mario'
const sexo = 'M'
const idade = 27
const contribuicao = 70

const soma = idade + contribuicao

if((sexo == 'M' && soma >=95) || (sexo == 'F' && soma >=85) ){
    console.log(`${nomeAps}, você pode se aposentar!`)
}else{
    console.log(`${nomeAps}, você ainda não pode se aposentar!`)
}