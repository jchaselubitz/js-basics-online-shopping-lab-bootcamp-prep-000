var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

addToCart("candy")
addToCart("fruit")
addToCart("sweets")
function addToCart(item) {
    var price = Math.floor(1 + Math.random() * 100)
    var itemInCart = {itemName: item, itemPrice: price}
    cart.push(itemInCart)
    return `${item} has been added to your cart.`
}

//console.log(cart)

function viewCart() {
  if (cart.length > 0) {
    var i = 0
    var array = []
    while (cart.length > i) {
      var itemPriceInCart = `${cart[i].itemName} at $${cart[i].itemPrice}`
      array.push(itemPriceInCart)
      i++
    }
    var countMinusOne = array.length - 1
    var allBustLast = array.slice(0,countMinusOne)
    var last = array.slice(-1)
    if (array.length === 1) {
      return (`In your cart, you have ${array[0]}.`)
    } else {
      return (`In your cart, you have ${allBustLast.join(", ")}, and ${last}.`)
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var countingArray = []
  for (var i = 0; i < cart.length; i++) {
    var price = cart[i].itemPrice
    countingArray.push(price)
  }
  var counter = 0
  for (var i = 0; i < countingArray.length; i++) {
    var adder = countingArray[i]
    counter = counter + adder
  }
  return counter
}



removeFromCart("fruit")

function search(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
        Num = i
    
      }
  } return Num
}
console.log(`this is search ${search()}`)


function removeFromCart(item) {
  search(item)
  if (Num > -1){
    console.log("here")
    //This needs to delete it from the cart
  } else {
      return "That item is not in your cart."
  }
}
//console.log(removeFromCart())
//console.log(cart)


function placeOrder(cardNumber) {
  // write your code here
}

/* From Stackoverflow
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/
