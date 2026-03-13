let cart = [];
let total = 0;

function addItem() {
    const name = document.getElementById("itemName").value;
    const price = parseFloat(document.getElementById("itemPrice").value);
    const quantity = parseInt(document.getElementById("itemQuantity").value);

    if (!name || isNaN(price) || isNaN(quantity) || quantity <= 0) {
        alert("请填写正确的商品信息！");
        return;
    }

    const itemTotal = price * quantity;
    cart.push({ name, price, quantity, itemTotal });
    total += itemTotal;

    updateCart();
    clearInputs();
}

function updateCart() {
    const cartList = document.getElementById("cartList");
    const totalPrice = document.getElementById("totalPrice");

    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ¥${item.price} x ${item.quantity} = ¥${item.itemTotal}`;
        cartList.appendChild(li);
    });

    totalPrice.textContent = total.toFixed(2);
}

function clearInputs() {
    document.getElementById("itemName").value = '';
    document.getElementById("itemPrice").value = '';
    document.getElementById("itemQuantity").value = '';
}

function checkout() {
    if (cart.length === 0) {
        alert("购物车是空的！");
        return;
    }

    alert(`总价 ¥${total.toFixed(2)}，谢谢惠顾！`);
    cart = [];
    total = 0;
    updateCart();
}
