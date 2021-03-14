
export function getResto() {
    let url = `https://performancetestdmb.azurewebsites.net/api/getallrestaurants`;
    return fetch(url).then((r) => r.json());
}

export function getProducts(restoNumber, catNumber) {
    let url = `https://performancetestdmb.azurewebsites.net/api/products/${restoNumber || 0}/Category${catNumber}`;
    return fetch(url).then((r) => r.json());
}