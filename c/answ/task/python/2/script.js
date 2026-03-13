// Verificación de respuesta
function checkAnswer() {
    const correctAnswer = "x está entre 10 y 30"; // Respuesta correcta
    const resultElement = document.getElementById("result");

    // Obtener la respuesta seleccionada
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        resultElement.innerHTML = "⚠️ Por favor, selecciona una respuesta.";
        resultElement.style.color = "red";
        return;
    }

    if (selectedOption.value === correctAnswer) {
        resultElement.innerHTML = "✅ ¡Correcto! Continuemos con la siguiente lección. 🎉";
        resultElement.style.color = "green";

        // Redirigir a la siguiente página después de 2 segundos
        setTimeout(() => {
            window.location.href = ""; // La siguiente lección
        }, 2000);
    } else {
        resultElement.innerHTML = "❌ Incorrecto. ";
        resultElement.style.color = "red";
    }
}
