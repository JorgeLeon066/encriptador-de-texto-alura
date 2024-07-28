/*
Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original
*/
let llave = ["enter", "imes", "ai", "ober", "ufat"];

//Funcionalidades

const encrypt = (txt) => {
  let outEncrypt = document.getElementById('output-message');
  let messageNone = document.getElementById('message-none');

  for (i = 0; i < llave.length; i++) {
    txt = txt.replaceAll(llave[i][0], llave[i]);
  };

  messageNone.style.display = "none";
  outEncrypt.innerText = txt;
};

function starEncrypt () {
  let texto = document.getElementById("textarea-input");
  encrypt(texto.value)
};

function starDecrypt () {};

// Evento de botones
let buttonEncriptar = document.getElementById("button-encrypt");  
buttonEncriptar.addEventListener("click", starEncrypt);  //Apregado del evento para el inicio del encritado
