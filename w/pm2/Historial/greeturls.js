
// DOM 元素
const daySelector = document.getElementById("daySelector");
const monthSelector = document.getElementById("monthSelector");
const searchButton = document.getElementById("searchButton");
const resultsDiv = document.querySelector(".results");
const loadingOverlay = document.getElementById("loading");


// 初始化：动态生成天数下拉菜单 & 显示全部记录
function init() {
    // 动态生成天数
    const daysInMonth = 31; // 简单假设每个月有31天
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement("option");
        option.value = day.toString().padStart(2, "0");
        option.textContent = day;
        daySelector.appendChild(option);
    }

    // 默认显示全部记录
    displayResults(lotteryData);
}

// 显示记录
// 更新显示记录的函数
function displayResults(data) {
    resultsDiv.innerHTML = ""; // 清空之前的内容

    if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No hay resultados disponibles.</p>";
        return;
    }

    data.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";

        // 将日期格式从 YYYY-MM-DD 转为 DD/MM/YYYY
        const [year, month, day] = item.date.split("-");
        const formattedDate = `${day}/${month}/${year}`;

        resultItem.innerHTML = `
            <div><strong>${formattedDate}</strong></div>
            <div>Mediodía: ${item.mediodia}</div>
            <div>Tarde: ${item.tarde}</div>
            <div>Noche: ${item.noche}</div>
        `;

        resultsDiv.appendChild(resultItem);
    });
}


function filterResults() {
    const selectedMonth = monthSelector.value.padStart(2, "0");
    const selectedDay = daySelector.value.padStart(2, "0");
    const selectedDate = `2025-${selectedMonth}-${selectedDay}`;

    // 显示加载画面
    const loadingOverlay = document.getElementById("loading");
    loadingOverlay.style.display = "flex";

    // 模拟加载过程，设置定时器
    setTimeout(() => {
        // 筛选符合条件的记录（日期 <= 选定日期）
        const filteredResults = lotteryData.filter(item => item.date <= selectedDate);

        // 隐藏加载画面
        loadingOverlay.style.display = "none";
        // 显示结果
        displayResults(filteredResults);
    }, 500); // 模拟 1 秒的加载时间
}


    

// 初始化页面
init();

// 绑定搜索按钮事件
searchButton.addEventListener("click", filterResults);

document.getElementById("yearSelector").addEventListener("change", function () {
    const selectedYear = this.value; // 获取用户选择的年份


    // 定义每个年份对应的网站链接 @调用全部
    const urls = {
        "2025": "https://edwinarch.github.io/w/pm2/Historial/2025/",
        "2024": "https://edwinarch.github.io/w/pm2/Historial/2024/",
        "2023": "https://edwinarch.github.io/w/pm2/Historial/2023/",
        "2022": "https://edwinarch.github.io/w/pm2/Historial/2022/",
        "2021": "https://edwinarch.github.io/w/pm2/Historial/2021/",
        "2020": "https://edwinarch.github.io/w/pm2/Historial/2020/",
        "2019": "https://edwinarch.github.io/w/pm2/Historial/2019/",
        "2018": "https://edwinarch.github.io/w/pm2/Historial/2018/",
        "2017": "https://edwinarch.github.io/w/pm2/Historial/2017/",
        "2016": "https://edwinarch.github.io/w/pm2/Historial/2016/",
        "2015": "https://edwinarch.github.io/w/pm2/Historial/2015/",
        "2014": "https://edwinarch.github.io/w/pm2/Historial/2014/",
        "2013": "https://edwinarch.github.io/w/pm2/Historial/2013/",
    };


    // 跳转到对应的网站
    if (urls[selectedYear]) {
        window.location.href = urls[selectedYear]; // 跳转到对应链接
    } else {
        alert("URL no está configurada para el año seleccionado.");
    }
});
