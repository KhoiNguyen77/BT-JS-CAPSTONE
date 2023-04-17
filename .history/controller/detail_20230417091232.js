window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('productId');
    console.log(param);
}