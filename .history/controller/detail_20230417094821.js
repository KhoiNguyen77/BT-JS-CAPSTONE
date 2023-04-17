window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const paramProduct = urlParams.get('productId');
}

getAllProducts = () => {
    let getProduct = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      })
        .then((resp) => {
            let listProduct = resp.data.content;
            console.log(listProduct);
        })
        .catch((err) => {
          document.querySelector(
            ".owl-carousel"
          ).innerHTML = `<h3 class="text-center mt-5">Oops ! Somethings Went Wrong <br> Please come back later !</h3>`;
        });
}

getAllProducts();