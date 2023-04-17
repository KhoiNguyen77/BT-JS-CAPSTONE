window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const paramProduct = urlParams.get("productId");
  let getProduct = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${paramProduct}`,
    method: "GET",
  })
    .then((resp) => {
      let product = resp.data.content;
      let buttonSize = ``;
      product.size.forEach((size) => {
        buttonSize += `<button class="button-size">${size}</button>`;
      });
      document.querySelector(".img_selected").innerHTML = `
      <img src="${product.image}" alt="" />
      `;
      document.querySelector(
        ".item_info"
      ).innerHTML = `<h2 class="item_name">${product.name}</h2>
        <p class="item_desc">
          ${product.description}
        </p>
        <div class="size">
          <p>Available Size</p>
            ${buttonSize}
        </div>
        <div class="price">
          <p>$${product.price}</p>
        </div>
        <div class="quantity">
        <button id="plus">+</button>
        <input type="number" value="0" id="input"/>
        <button id="minus">−</button>
        </div>
        <div class="addToCart">
          <button class="add">add to cart</button>
        </div>`;
    })
    .catch((err) => {});
};

const plusButton = document.getElementById("#plus");
const minusButton = document.getElementById("#minus");
const inputField = document.getElementById("#input");

minusButton.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener("click", (event) => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});
