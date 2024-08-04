// Funciones Complementarias
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
};

const validation = txt => {
  const regex = /^[a-z\s]*$/;
  return !regex.test(txt);
  // const conditon = "áéíóú";
  // return [...txt].some(char => conditon.includes(char))
};

const sendAlert = (ult) => {
  alert("Se detecto el INGRESO DE UN CARACTER NO VALIDO");
  inputText.setAttribute("maxlength", `${ult}`);
};

const styleOutput = () => {
  message_notice.style.display = "none";
  textarea_copy.style.display = "flex";
  textarea_copy.style.flexDirection = "column";
  textarea_copy.style.alignItems = "center"
}

const send = (txt) => {
  txt = txt.toLowerCase();
  styleOutput()
  outputText.value = txt;  // Usar .value en lugar de .innerText
};

const crypt = (type, txtEdit) => {
  const sendMessage = type === "encrypt" ? encrypt(txtEdit) : decrypt(txtEdit);
  send(sendMessage);
};

const restValidation = () => {
  const ult = inputText.value.length - 1;
  const vall = validation(inputText.value)
  // console.log(validation(inputText.value));

  vall && sendAlert(ult);
  inputText.hasAttribute("maxlength") && inputText.removeAttribute("maxlength");
}

// Principales funciones
function starEncrypt() {
  crypt("encrypt", inputText.value);
};

function starDecrypt() {
  crypt("decrypt", inputText.value);
};

function copyText() {
  navigator.clipboard.writeText(outputText.value);
};

function inputCheck() {
  const text = inputText.value;
  const isValid = validation(text);
  // console.log(validation(text));

  if (isValid) {
    const ult = text.length - 1;
    sendAlert(ult);
  } else {
    inputText.removeAttribute("maxlength");
  }
};

// Eventos de botones
const buttonEncrypt = document.getElementById("button-encrypt");
buttonEncrypt.addEventListener("click", starEncrypt);  // Agregado del evento para el inicio del encritado

const buttonDecrypt = document.getElementById("button-decrypt");
buttonDecrypt.addEventListener("click", starDecrypt);  // Agregado del evento para el inicio del desencriptado

const buttonCopy = document.getElementById('button-copy');
buttonCopy.addEventListener('click', copyText);   // Agragado del evento para el copiado del texto de salida

// Evento de lectura de entras de texto
const inputText = document.getElementById("textarea-input");
inputText.addEventListener("input", inputCheck);

// Otros
const outputText = document.getElementById("textarea-output");

const textarea_copy = document.getElementById("textarea-copy");

const message_notice = document.getElementById("message-notice")