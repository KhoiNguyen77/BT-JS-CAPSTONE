let getProductForCarousel = axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET',
    token: ''
}).then(resp => {
    console.log(resp.data.content);
})