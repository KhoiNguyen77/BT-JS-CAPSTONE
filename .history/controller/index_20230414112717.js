let getProductForCarousel = axios({
  url: "https://shop.cyberlearn.vn/api/Product1",
  method: "GET",
  token: "",
})
  .then((resp) => {
    let listShoes = resp.data.content;
    console.log(resp.data.content);
    let output = "";
    for (let i = 0; i < 4; i++) {
      let shoe = listShoes[i];
      output += `
        <div class="container">
          <div class="product_img">
            <img src="${shoe.image}" alt="" />
          </div>
          <div class="product_detail">
            <h2>${shoe.name}</h2>
            <p>${shoe.shortDescription}</p>
            <button>Buy Now</button>
          </div>
        </div>
        `;
    }
    document.querySelector(".owl-carousel .ỉtem").innerHTML = output;
  })
  .catch((err) => {
    console.log(err);
    document.querySelector(
      ".owl-carousel .item"
    ).innerHTML = `<h3>Oops ! Somethings Went Wrong</h3>`;
  });
