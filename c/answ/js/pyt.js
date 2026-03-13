// 选择题答案检查
function checkAnswer() {
    const correctAnswer = "30"; // 正确答案
    const resultElement = document.getElementById("result");

    // 获取用户选择的答案
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        resultElement.innerHTML = "⚠️ 请选择一个答案！";
        resultElement.style.color = "red";
        return;
    }

    if (selectedOption.value === correctAnswer) {
        resultElement.innerHTML = "✅ 正确！即将进入下一课 🎉";
        resultElement.style.color = "green";

        // 2秒后跳转到下一个页面
        setTimeout(() => {
            window.location.href = "/answ/task/python/2/index.html";
        }, 1000);
    } else {
        resultElement.innerHTML = "❌ 错误！正确答案是 30";
        resultElement.style.color = "red";
    }
}
