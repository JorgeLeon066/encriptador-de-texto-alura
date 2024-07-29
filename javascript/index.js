/*
Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original
*/
const key = ["enter", "imes", "ai", "ober", "ufat"];

const texto = document.getElementById("textarea-input");
const outCrypt = document.getElementById('output-message');
const messageNone = document.getElementById('message-none');

//Funcionalidades

const send = (txt) => {
  messageNone.style.display = "none";
  outCrypt.innerText = txt;
}

const encrypt = (txt) => {
  for (i = 0; i < key.length; i++) {
    txt = txt.replaceAll(key[i][0], key[i]);
  };
  return txt;
};

const decrypt = (txt) => {
  for (i = 0; i < key.length; i++) {
    txt = txt.replaceAll(key[i], key[i][0]);
  };
  return txt;
}

const crypt = (type, txt_edit) => {
  send(
    type === "encrypt" && encrypt(txt_edit) ||
    type === "decrypt" && decrypt(txt_edit)
  );
}


function starEncrypt () {
  crypt("encrypt", texto.value)
};

function starDecrypt () {
  crypt("decrypt", texto.value)
};

// Evento de botones
const buttonEncrypt = document.getElementById("button-encrypt");  
buttonEncrypt.addEventListener("click", starEncrypt);  //Apregado del evento para el inicio del encritado

const buttonDecrypt = document.getElementById("button-decrypt");
buttonDecrypt.addEventListener("click", starDecrypt);  //Apregado del evento para el inicio del Desecriptado
