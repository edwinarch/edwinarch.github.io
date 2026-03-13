// 选择题答案检查
function checkAnswer() {
    const correctAnswer = "30"; // 正确答案
    const resultElement = document.getElementById("result");

    // 获取用户选择的答案
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        resultElement.innerHTML = "⚠️ ¡Por favor elige una respuesta!";
        resultElement.style.color = "red";
        return;
    }

    if (selectedOption.value === correctAnswer) {
        resultElement.innerHTML = "✅ ¡Correcto! Continuemos con la siguiente lección. 🎉";
        resultElement.style.color = "green";

        // 2秒后跳转到下一个页面
        setTimeout(() => {
            window.location.href = "/answ/task/python/2/index.html";
        }, 2000);
    } else {
        resultElement.innerHTML = "❌ Incorrecto.";
        resultElement.style.color = "red";
    }
}
