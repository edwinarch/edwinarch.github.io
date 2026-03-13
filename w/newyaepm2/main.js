document.getElementById("yearSelector").addEventListener("change", function () {
        const urls = {
          "2025": "https://edwinarch.github.io/w/pm2/Historial/2025/",
          "2024": "https://edwinarch.github.io/w/pm2/Historial/2024/",
          "2023": "https://edwinarch.github.io/w/pm2/Historial/2023/"
        };
        const year = this.value;
        if (urls[year]) window.location.href = urls[year];
        else alert("URL no está configurada para el año seleccionado.");
      });