
let getProductForCarousel = axios({
  url: "https://shop.cyberlearn.vn/api/Product",
  method: "GET",
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
        // document.querySelector(`".owl-carousel .item${i}"`).innerHTML = output;
    }
  })
  .catch((err) => {
    document.querySelector(
      ".owl-carousel"
    ).innerHTML = `<h3 class="text-center mt-5">Oops ! Somethings Went Wrong</h3>`;
  });
