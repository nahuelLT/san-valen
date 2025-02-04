let conversation = document.getElementById("conversation");
let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");
let responseContainer = document.getElementById("response-container");
let introMessage = document.getElementById("intro-message");
let intro = document.querySelector(".intro");

// Función para agregar un mensaje al "chat"
function addMessage(message) {
    let msgDiv = document.createElement("div");
    msgDiv.textContent = message;
    conversation.appendChild(msgDiv);
    conversation.scrollTop = conversation.scrollHeight; // Para que siempre vea el último mensaje
}

// Mostrar los botones después de la animación
setTimeout(() => {
    responseContainer.classList.remove("hidden");
}, 3000); // Los botones aparecen 3 segundos después

// Respuesta al hacer clic en "Sí"
yesButton.addEventListener("click", function() {
    addMessage("¿Segura? 💕");
    yesButton.style.display = "none";
    noButton.style.display = "none";

    setTimeout(() => {
        addMessage("Seguro que sí... 😘");
        setTimeout(() => {
            addMessage("¡Sabía que dirías que sí! 😍💖");
            addMessage("Este San Valentín será el más especial 💘");
        }, 1500);
    }, 1500);
});

// Respuesta al hacer clic en "No"
noButton.addEventListener("click", function() {
    addMessage("¡No te preocupes, siempre serás especial para mí! 💖");
    yesButton.style.display = "none";
    noButton.style.display = "none";
});
