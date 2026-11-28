// question 8 //
function asyncArrayMapping(arr) {
    return arr.map(num => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    });
}

asyncArrayMapping([2, 4, 6, 8]).then(result => {
console.log(result);
});

// question 9 //

function placeOrder() {
    return new Promise((resolve, reject) => {
        let delay = Math.random() * 3000;

        setTimeout(() => {
            resolve("Order placed successfully!");
        }, delay);
    });
}

placeOrder().then(message => {
    console.log(message);
});


// question 10 //


function brewCoffee(type) {
    return new Promise((resolve, reject) => {
        let delay = Math.random() * 3000;

        setTimeout(() => {
            resolve(`${type} is ready!`);
        }, delay);
    });
}

brewCoffee("Cold Coffee").then(message => {
    console.log(message);
});

// question 11 //

let products = [
    { name: "Mobile", category: "electronics", price: 10000 },
    { name: "Laptop", category: "electronics", price: 50000 },
    { name: "Shirt", category: "clothes", price: 1000 },
    { name: "Shoes", category: "clothes", price: 2000 }
];

function filterProducts(arr, criteria) {
    return arr.filter(product => product.category === criteria);
}

console.log(filterProducts(products, "clothes"));

// question 12 //

function setAuthToken(token) {
    let expiration = Date.now() + 60 * 60 * 1000;

    let tokenData = {
        token: token,
        expires: expiration
    };

    localStorage.setItem("authToken", JSON.stringify(tokenData));
}

setAuthToken("abc123xyz");


// 13 question //

function calculateTotal(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total = total + (products[i].price * products[i].quantity);
    }

    return total;
}

let cart = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Shoes", price: 2000, quantity: 1 },
    { name: "Watch", price: 1000, quantity: 3 }
];

console.log(calculateTotal(cart));

