let getProductForCarousel = axios({
  url: "https://shop.cyberlearn.vn/api/Product",
  method: "GET",
  token: "",
}).then((resp) => {
  let listShoes = resp.data.content;
  console.log(resp.data.content);
  for (let i = 0; i < 4; i++) {
    let shoe = listShoes[i];
    let output = "";
    output += `
        <div class="item">
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
      </div>
        `;
    document.querySelector(".owl-carousel").innerHTML = output;
  }
}).catch (err => {
    console.log(err);
    for (let i = 0 ;  i < 4 ; i ++) {
        let shoe = listShoes[i];
        let errOutput = '';
        errOutput += "404: Oops \n Product not founded";
    }
    document.querySelector(".owl-carousel").innerHTML = errOutput;


}) 
