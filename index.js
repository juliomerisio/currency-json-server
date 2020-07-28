var fx = require('money');

fx.base = "EUR";

const options = [
  {
    label: "Brazil",
    value: "BRL",
    flag: "https://www.countryflags.io/br/flat/64.png"
  }
]

fx.rates = {
  "CAD": 1.5729,
  "HKD": 9.1154,
  "ISK": 158.4,
  "PHP": 57.817,
  "DKK": 7.4436,
  "HUF": 345.91,
  "CZK": 26.193,
  "AUD": 1.6472,
  "RON": 4.8303,
  "SEK": 10.2678,
  "IDR": 17075.52,
  "INR": 87.885,
  "BRL": 6.0919,
  "RUB": 84.0682,
  "HRK": 7.5163,
  "JPY": 123.88,
  "THB": 37.05,
  "CHF": 1.0838,
  "SGD": 1.6216,
  "PLN": 4.4016,
  "BGN": 1.9558,
  "TRY": 8.0552,
  "CNY": 8.2344,
  "NOK": 10.6683,
  "NZD": 1.7605,
  "ZAR": 19.338,
  "USD": 1.176,
  "MXN": 26.0083,
  "ILS": 4.0143,
  "GBP": 0.9134,
  "KRW": 1407.15,
  "MYR": 5.0009
}
const dinero = fx.convert(5, {from: "BRL", to: "USD"});

const currencyFormatter = ({code, amount }) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: code }).format(amount)
}
const result = currencyFormatter({code: `USD`, amount: dinero})

const mapped = Object.keys(fx.rates).map(el => {
  const prefixWith2FistLetters = el.slice(0, 2).toLowerCase()
  return ({
    label: el,
    value: el,
    flag: `https://www.countryflags.io/${prefixWith2FistLetters}/flat/64.png`
  })
})

console.log(JSON.stringify(mapped,null, 1));

console.log(result) // R$ 25,90

