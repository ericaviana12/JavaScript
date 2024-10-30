function fazerHamburguer(tipoCarne, queijo, alface, tomate) {
    console.log("Montando um hambúrguer com:")
    console.log("Carne: " + tipoCarne)
    console.log("Queijo: " + (queijo ? "Sim" : "Não"))
    console.log("Alface: " + (alface ? "Sim" : "Não"))
    console.log("Tomate: " + (tomate ? "Sim" : "Não"))
    console.log("Seu hambúrguer está pronto!")
  }
  
  // Agora, se alguém pedir um hambúrguer com carne bovina, queijo e alface, você chama a função assim:
  fazerHamburguer("bovina", true, true, false)
