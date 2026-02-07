// function newPrice(currentPrice, discount) {
//   let notNumber = "Invalid";
//   if (typeof currentPrice !== "number") {
//     return notNumber;
//   }
//   if (typeof discount !== "number") {
//     return notNumber;
//   }
//   if (discount < 0 || discount > 100) {
//     return notNumber;
//   }

//   let discountPrice = (currentPrice * discount) / 100;
//   let newPrice = currentPrice - discountPrice;
//   newPrice = newPrice.toFixed(3);
//   let fainalNewPrice = newPrice;
//   return fainalNewPrice;
// }
// let result = newPrice(1500, 20);

// console.log(result);

// 2 no problem start

function validOtp(otp) {
  let stateschek = "Invalid";
  let otpValid = true;
  let startwidth = "ph-";

  if (typeof otp != "string") {
    return stateschek;
  } else if (otp.length < 8) {
    otpValid = false;
  } else if (!otp.startsWith(startwidth)) {
    otpValid = false;
  }
  return otpValid;
}

let result = validOtp(12345678);
console.log(result);

// 3 no problem start
