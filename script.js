let formElement = document.querySelector(".form__element");
let inputElement = document.querySelector(".form__input");
let currencyElement = document.querySelector(".form__currency");
let formResult = document.querySelector(".form--result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let EURO = 0.2244;
  let ISK = 33.0178;
  let USD = 0.2461;
  let GPD = 0.1918;

  let currency = currencyElement.value;
  let amount = +inputElement.value;

  let result;

  switch (currency) {
    case "Euro":
      result = amount * EURO;
      break;
    case "Isk":
      result = amount * ISK;
      break;
    case "Usd":
      result = amount * USD;
      break;
    case "Gpd":
      result = amount * GPD;
      break;
  }

  formResult.innerHTML = `${amount.toFixed(2)} PLN = <strong class="result--js">${result.toFixed(2)} ${currency}</strong>`

});



