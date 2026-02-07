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

// let result = newPrice(2000, 15);

// console.log(result);

// 2 no problem start

// function validOtp(otp) {
//   let stateschek = "Invalid";
//   let otpValid = true;
//   let startwidth = "ph-";

//   if (typeof otp != "string") {
//     return stateschek;
//   } else if (otp.length < 8) {
//     otpValid = false;
//   } else if (!otp.startsWith(startwidth)) {
//     otpValid = false;
//   }
//   return otpValid;
// }

// let result = validOtp(12345678);
// console.log(result);

// // 3 no problem start

// function finalScore(omr) {
//   let count = 0;
//   let valids = "Invalid";
//   if (Array.isArray(omr) == true) {
//     return valids;
//   }
//   if (typeof omr !== "object") {
//     return valids;
//   }
//   for (let score in omr) {
//     count = omr[score] + count;
//   }
//   if (count > 100 || count < 100) {
//     return valids;
//   }
//   let wrongResult = omr["wrong"] * 0.5;
//   let rightResult = omr["right"];
//   let skipResukt = omr["skip"] * 0;
//   let Totalresult = rightResult - wrongResult - skipResukt;
//   Totalresult = Math.round(Totalresult);
//   let fainalResult = Totalresult;
//   return fainalResult;
// }
// let result = finalScore({ right: 67, wrong: 23, skip: 10 });
// console.log(result);

// 4 no problem start

// function gonoVote(array) {
//   let validity = "Invalid";
//   if (Array.isArray(array) == false) {
//     return validity;
//   }
//   let besi = 0;
//   let kom = 0;
//   let soman = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "ha") {
//       besi++;
//     } else if (array[i] == "na") {
//       kom++;
//     }
//   }

//   if (besi > kom) {
//     return true;
//   } else if (besi < kom) {
//     return false;
//   } else {
//     return "equal";
//   }
// }

// let result = gonoVote("ha, na");
// console.log(result);

// 5 no problem start

function analyzeText(str) {
  let validity = "Invalid";
  let storword = "";
  let token = 0;
  if (typeof str !== "string") {
    return validity;
  }
  if (str == " ") {
    return validity;
  }
  if (str == "") {
    return validity;
  }
  for (let chr of str) {
    if (chr !== " ") {
      token++;
    }
  }

  let split = str.split(" ");
  for (let bigest of split) {
    if (bigest.length > storword.length) {
      storword = bigest;
    }
  }
  return {
    longwords: storword,
    token: token,
  };
}
// let result = analyzeText(" ");
// console.log(result);
