/**
 * Operadores lógicos (AND, OR e NOT)
 * @author Erica Viana
 */

console.clear()

console.log("Operador lógico | Simbologia ")
console.log("     AND        |     &&     ")
console.log("     OR         |     ||     ")
console.log("     NOT        |     !      ")

No JavaScript, os operadores lógicos AND (&&), OR (||) e NOT (!) são usados para combinar ou inverter expressões booleanas (verdadeiro ou falso). Veja como cada um funciona:


1) AND (&&)
O operador AND retorna verdadeiro se ambas as expressões forem verdadeiras. Se qualquer uma das expressões for falsa, ele retorna falso.

Sintaxe: expressão1 && expressão2
Exemplo: Imagine que você quer verificar se um usuário pode fazer login. Ele só pode fazer isso se ambos os campos de usuário e senha estiverem preenchidos.

let usuario = "admin";
let senha = "12345";

if (usuario && senha) {
  console.log("Login permitido"); // Será exibido se ambos os campos forem preenchidos
} else {
  console.log("Preencha todos os campos");
}

Aqui, o login só será permitido se usuario e senha forem verdadeiros (ou seja, se ambos os campos estiverem preenchidos).


2) OR (||)
O operador OR retorna verdadeiro se pelo menos uma das expressões for verdadeira. Só retorna falso se ambas forem falsas.

Sintaxe: expressão1 || expressão2
Exemplo: Imagine que você quer exibir uma mensagem de boas-vindas, mas o usuário pode ter um apelido ou um nome. Se um dos dois estiver presente, a mensagem é mostrada.

let nome = "";
let apelido = "Mike";

if (nome || apelido) {
  console.log("Bem-vindo, " + (nome || apelido)); // Usa 'apelido' se 'nome' não estiver definido
} else {
  console.log("Por favor, cadastre um nome ou apelido");
}

Se o nome estiver vazio, ele usará o apelido para a saudação, mostrando flexibilidade.


3) NOT (!)
O operador NOT inverte o valor da expressão. Se for verdadeira, ele retorna falso, e se for falsa, ele retorna verdadeiro.

Sintaxe: !expressão
Exemplo: Agora, imagine que você quer verificar se um campo de e-mail não está preenchido para exibir um aviso.

let email = "";

if (!email) {
  console.log("Por favor, insira seu e-mail"); // Será exibido porque 'email' está vazio
}

Aqui, o operador NOT inverte a expressão, indicando que se o campo não estiver preenchido (ou seja, estiver vazio), o aviso é mostrado.

Esses exemplos são focados em cenários práticos que você pode usar em validação de formulários e lógicas comuns no desenvolvimento web.
Esses operadores são fundamentais em condições e loops para controle de fluxo em JavaScript.