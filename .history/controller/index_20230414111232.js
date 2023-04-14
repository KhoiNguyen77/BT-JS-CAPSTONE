let getProductForCarousel = axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET'
}).then(resp => {
    console.log(resp);
})