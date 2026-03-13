const products = [ //Ferreteria 
    
    {
        //1
        img: "https://raw.githubusercontent.com/CarlosW-sky/Database/refs/heads/main/Verduras-y-Frutas/1Repollo-blanco.webp",
        desc: "Repollo blanco",
        code: "0",
        cabys: "0121202020100",
        tax: "13%"
    },
    {
        //2
        img: "",
        desc: "Trigo duro, para siembra (semillas)",
        code: "0",
        cabys: "0111100000100",
        tax: "13%"
    },
    {
        //3
        img: "",
        desc: " Trigo, para siembra (semillas), excepto duro",
        code: "0",
        cabys: "0111100009900",
        tax: "13%"
    },
    {
        //4
        img: "",
        desc: " Trigo duro, excepto para siembra",
        code: "0",
        cabys: "0111200000100",
        tax: "13%"
    },
    {
        //5
        img: "",
        desc: " Trigo, para producción de alimento para animales",
        code: "0",
        cabys: "0111200000200",
        tax: "13%"
    },
    {
        //6
        img: "",
        desc: " Trigo, n.c.p.",
        code: "0",
        cabys: "0111200009900",
        tax: "13%"
    },
    {
        //7
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //8
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //9
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //10
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //11
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //11
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //11
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //11
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //11
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
    {
        //11
        img: "",
        desc: "",
        code: "0",
        cabys: "",
        tax: "13%"
    },
];

const tableBody = document.getElementById("productTable");
const searchInput = document.getElementById("searchInput");
const filterRadios = document.querySelectorAll("input[name='filter']");

function renderTable(filteredProducts = products) {
    tableBody.innerHTML = "";
    filteredProducts.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="${product.img}" alt="商品图片"></td>
            <td>${product.desc}</td>
            <td>${product.code}</td>
            <td>${product.cabys}</td>
            <td>${product.tax}</td>
        `;
        tableBody.appendChild(row);
    });

    // 添加图片放大功能
    document.querySelectorAll("td img").forEach(img => {
        img.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";

            const fullImage = document.createElement("img");
            fullImage.src = img.src;
            fullImage.style.maxWidth = "90%";
            fullImage.style.maxHeight = "90%";
            fullImage.style.border = "5px solid white";

            modal.appendChild(fullImage);

            modal.addEventListener("click", () => {
                modal.remove();
            });

            document.body.appendChild(modal);
        });
    });
}

let currentPage = 1;
const itemsPerPage = 6;

function searchProducts() {
    const query = searchInput.value.toLowerCase();
    const selectedFilter = document.querySelector("input[name='filter']:checked").value;

    const filteredProducts = products.filter(product => {
        if (selectedFilter === "desc") {
            return product.desc.toLowerCase().includes(query);
        } else if (selectedFilter === "code") {
            return product.code.includes(query);
        } else if (selectedFilter === "cabys") {
            return product.cabys.includes(query);
        }
        return false;
    });

    currentPage = 1; // Reset to the first page on new search
    renderPaginatedTable(filteredProducts);
}

function renderPaginatedTable(filteredProducts = products) {
    tableBody.innerHTML = "";
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    paginatedProducts.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="${product.img}" alt="商品图片"></td>
            <td>${product.desc}</td>
            <td>${product.code}</td>
            <td>${product.cabys}</td>
            <td>${product.tax}</td>
        `;
        tableBody.appendChild(row);
    });

    // Add "Load More" button if there are more items to show
    const loadMoreButton = document.getElementById("loadMoreButton");
    if (startIndex + itemsPerPage < filteredProducts.length) {
        if (!loadMoreButton) {
            const button = document.createElement("button");
            button.id = "loadMoreButton";
            button.textContent = "查看更多";
            button.addEventListener("click", () => {
                currentPage++;
                renderPaginatedTable(filteredProducts);
            });
            tableBody.parentElement.appendChild(button);
        }
    } else if (loadMoreButton) {
        loadMoreButton.remove();
    }

    // Add image zoom functionality
    document.querySelectorAll("td img").forEach(img => {
        img.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";

            const fullImage = document.createElement("img");
            fullImage.src = img.src;
            fullImage.style.maxWidth = "90%";
            fullImage.style.maxHeight = "90%";
            fullImage.style.border = "5px solid white";

            modal.appendChild(fullImage);

            modal.addEventListener("click", () => {
                modal.remove();
            });

            document.body.appendChild(modal);
        });
    });
}

// 初次渲染表格
document.addEventListener("DOMContentLoaded", () => {
    renderTable();
    searchInput.addEventListener("input", searchProducts);
});