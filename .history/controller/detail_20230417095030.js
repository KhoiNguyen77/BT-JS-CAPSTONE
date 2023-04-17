window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const paramProduct = urlParams.get('productId');
    return paramProduct;
}

getSelectedProduct = () => {
    let getProduct = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      })
        .then((resp) => {
            let listProduct = resp.data.content[1];
            console.log(listProduct);
        })
        .catch((err) => {
        });
}

getSelectedProduct();