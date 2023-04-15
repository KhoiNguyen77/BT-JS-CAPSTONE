getProductForCarousel = () => {
  let getProductForCarousel = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  })
    .then((resp) => {
      let listShoes = resp.data.content;
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
    url: "https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=adidas",
    method: "GET",
  })
    .then((resp) => {
      let listAdidas = resp.data.content;
      console.log(listAdidas);
      let output = "";
      listAdidas.forEach((shoe) => {
        output += `            <div class="col-12 col-sm-6 col-md-4">
        <div class="container">
          <div class="card">
            <img src="${shoe.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${shoe.name}</h5>
              <p class="card-text">
                ${shoe.shortDescription}
              </p>
              <button class="more-info">
              <a href="#">More Info</a>
              </button>

            </div>
          </div>
        </div>
      </div>`;
        document.querySelector(".adidas-row").innerHTML = output;
      });
    })
    .catch((err) => {});
};

getProduct();

getAdidas = () => {
  let getProduct = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=adidas",
    method: "GET",
  })
    .then((resp) => {
      let listAdidas = resp.data.content;
      console.log(listAdidas);
      listAdidas.forEach((shoe, index) => {
        let output = "";
        output = `
        <div class="container">
          <div class="card">
            <img src="${shoe.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${shoe.name}</h5>
              <p class="card-text">
                ${shoe.shortDescription}
              </p>
              <p class="card-text price">
                $${shoe.price}
              </p>
              <button class="more-info">
              <a href="#">More Info</a>
              </button>
            </div>
          </div>
        </div>`;
        console.log(output);
        document.querySelector(`.adidas-swiper .item${index}`).innerHTML = output;
      });
    })
    .catch((err) => {});
};

getAdidas();
