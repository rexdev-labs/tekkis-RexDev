const url = 'http://www.amazon.co.uk/something';
//const { hostname } = new URL(url);
let domain = (new URL(url));
domain = domain.hostname.replace('www.','');
console.log(domain.substr(domain.indexOf(".")));
