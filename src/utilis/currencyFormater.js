export const currencyFormater = (amount) => {
  return amount?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

// const number = 123456.78;
// const formattedCurrency = number.toLocaleString("en-US", { style: "currency", currency: "USD" });
// console.log(formattedCurrency); // "$123,456.78"
