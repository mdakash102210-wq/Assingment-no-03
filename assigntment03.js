function newPrice(currentPrice, discount) {
  let notNumber = "Invalid";
  if (typeof currentPrice !== "number") {
    return notNumber;
  }
  if (typeof discount !== "number") {
    return notNumber;
  }
  if (discount < 0 || discount > 100) {
    return notNumber;
  }

  let discountPrice = (currentPrice * discount) / 100;
  let newPrice = currentPrice - discountPrice;
  newPrice = newPrice.toFixed(3);
  return newPrice;
}
let result = newPrice(500, "5");

console.log(result);

// git push dane
