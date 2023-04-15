getProductForCarousel = () => {
  let getProductForCarousel = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  })
    .then((resp) => {
      let listShoes = resp.data.content;
      console.log(resp.data.content);
      for (let i = 0; i < 5; i++) {
        let output = "";
        let shoe = listShoes[i];
        output = `
          <div class="container">
            <div class="product_img">
              <img src="${shoe.image}" alt="" />
            </div>
            <div class="product_detail">
              <h2>${shoe.name}</h2>
              <p>${shoe.description}</p>
              <button>Buy Now</button>
            </div>
          </div>
          `;
        document.querySelector(`.owl-carousel .item${i}`).innerHTML = output;
        console.log(document.querySelector(`.owl-carousel .item${i}`));
      }
    })
    .catch((err) => {
      document.querySelector(
        ".owl-carousel"
      ).innerHTML = `<h3 class="text-center mt-5">Oops ! Somethings Went Wrong <br> Please come back later !</h3>`;
    });
};

getProductForCarousel();

getProduct = () => {
  let getProduct = axios({
    url: 'https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=adidas',
    method: "GET"
  }).then (
    resp => {
      let listAdidas = resp.data.content;
      console.log(listAdidas);
      let output = "";
      listAdidas.forEach(shoe => {

      })
    }
  ).catch (err => {
  })
}

getProduct();
