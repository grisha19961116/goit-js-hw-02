// Exercise 5
// Write function checkForSpam(message), which accepts 1 parameter string.
// Function checks her on cast words like "spam" and "sale"If find banned word than will function return true,
//   else  will return false.Words in sentence can be in free register.
const checkForSpam = function (message) {
  const input = message.split(" ");
  const elemSpam = "spam";
  const elemSpamUpperCase = "[SPAM]";
  const elemSale = "sale";
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === elemSpam ||
      input[i] === elemSale ||
      input[i] === elemSpamUpperCase
    ) {
      return true;
    }
  }
  return false;
};
console.log(checkForSpam("Latest technology news ")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now sale")); // true
console.log(checkForSpam("[SPAM] How to earn fast money ?")); // true
