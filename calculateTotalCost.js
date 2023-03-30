const  cart = [
    { name: "Shirt" , price: 500 , quantity:5},
    { name: "Laptop" , price: 100000 , quantity:1},
    { name: "Watch" , price: 2000 , quantity:2},
    { name: "Phone" , price: 50000 , quantity:1},
];

let total = 0 ;
for ( let product of cart){
    const productTotalPrice = product.price * product.quantity;
    total = total + productTotalPrice;
}
console.log(total);
