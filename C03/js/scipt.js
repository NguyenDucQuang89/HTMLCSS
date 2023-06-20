var menu = {
    "Caffe Americano": { price: 3.99, image: "images/Americano.jpg"},
    "Caffe Latte": { price: 4.59, image: "images/Latte.jpg"},
    "Capuccino": { price: 3.99, image: "images/Capuccino.jpg"},
    "Moccha": { price: 2.99, image: "images/Mocha.jpg"},
    "White Chocolate Mocha": {price: 4.99, image: "images/starbucks"},
    "Caramel Macchiato": {price: 4.79, image: "images/Starbucks.jpg"},
    "Java chip Frappuccino": {price: 5.49, image: "images/Starbucks.jpg"},
    "Green Tea Frappuccino": {price: 4.99, image: "images/Starbucks.jpg"},
    "Chai Tea Latte": {price: 3.99, image: "images/Starbucks.jpg"},
};
function createDrinkMenu() {
    var  menuContainer = document.getElementById("menu-container");
    var menuList = document.createElement("ul");
    console.log(here);

    for (var drink in menu) {
        var price = menu[drink].price.toFixed(2);
        var image = menu[drink].image;
        var menuItem = document.createElement("li");
        var drinkImage = document.createElement("img");
        var drinkName = document.createElement("p");
        var drinkPrice = document.createElement("p");
        drinkImage.src = image;
        drinkImage.alt = drink;
        drinkName.textContent = drink;
        drinkPrice.textContent = "$" + price;
        
        menuItem.appendChild(drinkImage);
        menuItem.appendChild(drinkName);
        menuItem.appendChild(drinkPrice);
        menuList.appendChild(drinkItem);
    }
    menuContainer.appendChild(menuList);
}
window.onload =  createDrinkMenu;