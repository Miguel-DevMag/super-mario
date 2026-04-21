/*
Logica para executar cada ação do sistema de atendimento mario, vamos criar um passo a passo do sistema.

1.Saiba mais = quando clicarmos no botão saiba mais, ele deve trazer o formulario para o centro da dela vindo pelo lado direito.

2.Formulario = quando o formlario estiver no centro vai ter uma sombra atras do formulario com os outros elementos escondidos da tela.

3.Quando clicar na sobra do formulario que esta atras do formulario como um background ele vai fechar o 
formulario e voltar para a posição original indo do centro para a direita.
*/

const clicarFormulario = document.querySelector('.formulario')
const sombraFormulario = document.querySelector('.mascara-form')


function clickForm(){
    clicarFormulario.style.top = "50%";
    clicarFormulario.style.left = "50%";
    clicarFormulario.style.transform = "translate(-50%, -50%)";
    clicarFormulario.style.zIndex = "1";
    sombraFormulario.style.visibility = "visible";
}
function shadowForm(){
    sombraFormulario.style.visibility = "hidden";
    sombraFormulario.style.transition = "0.9s opacity ease-in-out";
    clicarFormulario.style.top = "30%";
    clicarFormulario.style.left = "-22%";
    clicarFormulario.style.transform = "translate(  0)";
    clicarFormulario.style.zIndex = "0";
    clicarFormulario.style.transition = "0.9s left ease-in-out";
    
}
