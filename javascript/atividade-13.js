//crie uma função pegue a idade, genero e cidade de um usuario
//Se o usuario for do sexo masculino e tiver mais de 18 anos
//Exibir Precisa se alistar
//Se o usuario for do sexo masculino e tiver menos de 18 anos
//Exibir Não pode se alistar

const user = {
    nome: "Jardheson",
    idade: 39,
    genero: "masculino",
    cidade: "Teresina"
}

function verificarAlistamento(user) {
    if(user.genero == "masculino" && user.idade >= 18){
        console.log("Precisa se alistar")
    } else {
        console.log("Não pode se alistar")
    }
}

verificarAlistamento(user)