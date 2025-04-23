const user = {
    nome: "Jardheson",
    altura: 1.70,
    peso: 85
}

//criar uma função que receba o objeto user
// e calcule o IMC
// IMC = peso / (altura * altura)

function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura)

    if(imc < 16){
        return console.log("Magreza grave")
    } 

    if(imc >= 16 && imc < 17){
        return console.log("Magreza moderada")
    }

    if(imc >= 17 && imc < 18.5){
        return console.log("Magreza leve")
    }

    if(imc >= 18.5 && imc < 25){
        return console.log("Saudável")
    }

    if(imc >= 25 && imc < 30){
        return console.log("Sobrepeso")
    }

    if(imc >= 30 && imc < 35){
        return console.log("Obesidade grau 1")
    }

    if(imc >= 35 && imc < 40){
        return console.log("Obesidade grau 2")
    }

    if(imc >= 40){
        return console.log("Obesidade grau 3")
    }
}

calcularIMC(user)