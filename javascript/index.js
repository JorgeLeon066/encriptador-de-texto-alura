const inputText = document.getElementById("textarea-input");
const outputText = document.getElementById("textarea-output");

// Funciones Complementarias

const send = (txt) => {
  txt = txt.toLowerCase();
  
  outputText.style.backgroundImage = "none";
  outputText.value = txt;  // Usar .value en lugar de .innerText
}

const encrypt = (txt) => {
  const key = ["enter", "imes", "ai", "ober", "ufat"];

  for (let i = 0; i < key.length; i++) {
    txt = txt.replaceAll(key[i][0], key[i]);
  };
  return txt;
};

const decrypt = (txt) => {
  const key = ["enter", "imes", "ai", "ober", "ufat"];

  for (let i = 0; i < key.length; i++) {
    txt = txt.replaceAll(key[i], key[i][0]);
  };
  return txt;
}

const crypt = (type, txtEdit) => {
  const sendMessage = type === "encrypt" ? encrypt(txtEdit) : decrypt(txtEdit);
  send(sendMessage);
}

// Principales funciones

function starEncrypt() {
  crypt("encrypt", inputText.value);
};

function starDecrypt() {
  crypt("decrypt", inputText.value);
};

// Eventos de botones
const buttonEncrypt = document.getElementById("button-encrypt");  
buttonEncrypt.addEventListener("click", starEncrypt);  // Agregado del evento para el inicio del encritado

const buttonDecrypt = document.getElementById("button-decrypt");
buttonDecrypt.addEventListener("click", starDecrypt);  // Agregado del evento para el inicio del desencriptado
