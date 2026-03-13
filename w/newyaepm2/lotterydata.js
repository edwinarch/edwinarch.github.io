// ------------------ 数据 ------------------
    const lotteryData = [
      { date: "2025-01-03", mediodia: "33", tarde: "42", noche: "76" },
      { date: "2025-01-02", mediodia: "76", tarde: "87", noche: "65" },
      { date: "2025-01-01", mediodia: "36", tarde: "48", noche: "20" }
    ];

    // ------------------ 初始化 ------------------
    function init() {
      const daySelector = document.getElementById("daySelector");
      const resultsDiv = document.querySelector(".results");

      // 生成天数
      for (let day = 1; day <= 31; day++) {
        const opt = document.createElement("option");
        opt.value = day.toString().padStart(2, "0");
        opt.textContent = day;
        daySelector.appendChild(opt);
      }

      // 默认显示所有数据
      displayResults(lotteryData);
    }

    // ------------------ 显示结果 ------------------
    function displayResults(data) {
      const resultsDiv = document.querySelector(".results");
      resultsDiv.innerHTML = "";

      if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No hay resultados disponibles.</p>";
        return;
      }

      data.forEach(item => {
        const [y, m, d] = item.date.split("-");
        const formattedDate = `${d}/${m}/${y}`;
        const div = document.createElement("div");
        div.className = "result-item";
        div.innerHTML = `
          <div><strong>${formattedDate}</strong></div>
          <div>Mediodía: ${item.mediodia}</div>
          <div>Tarde: ${item.tarde}</div>
          <div>Noche: ${item.noche}</div>
        `;
        resultsDiv.appendChild(div);
      });
    }

    // ------------------ 过滤 ------------------
    function filterResults() {
      console.log("✅ Buscar clic detectado");
      const monthSelector = document.getElementById("monthSelector");
      const daySelector = document.getElementById("daySelector");
      const selectedMonth = monthSelector.value.padStart(2, "0");
      const selectedDay = daySelector.value.padStart(2, "0");
      const selectedDate = new Date(`2025-${selectedMonth}-${selectedDay}`);
      const loadingOverlay = document.getElementById("loading");

      loadingOverlay.style.display = "flex";

      setTimeout(() => {
        const filtered = lotteryData.filter(item => new Date(item.date) <= selectedDate);
        console.table(filtered);
        loadingOverlay.style.display = "none";
        displayResults(filtered);
      }, 400);
    }

    // ------------------ 初始化绑定 ------------------
    window.addEventListener("DOMContentLoaded", () => {
      init();

      document.getElementById("searchButton").addEventListener("click", filterResults);
      /*
      document.getElementById("yearSelector").addEventListener("change", function () {
        const urls = {
          "2025": "https://edwinarch.github.io/w/pm2/Historial/2025/",
          "2024": "https://edwinarch.github.io/w/pm2/Historial/2024/",
          "2023": "https://edwinarch.github.io/w/pm2/Historial/2023/"
        };
        const year = this.value;
        if (urls[year]) window.location.href = urls[year];
        else alert("URL no está configurada para el año seleccionado.");
      });*/
    });