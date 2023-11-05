

// Selecting all elements with class "currency", id "num", id "ans", id "btn"
const select = document.querySelectorAll(".currency");
const num = document.getElementById("num");
const ans = document.getElementById("ans");
const btn = document.getElementById("btn");



// Fetching and displaying the list of currencies from the API
fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

// Function to display the list of currencies in the dropdown menus both top and bottom menus
function display(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
       select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
       select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

// Adding an event listener to the button click event
btn.addEventListener("click", () => {
  // Getting the selected currencies and value from the input
  let firstCurrency = select[0].value;
  let secondCurrency = select[1].value;
  let value = num.value;

  // Checking if the selected currencies are not the same and calling the selected currencies values
  if (firstCurrency != secondCurrency) {
     convert(firstCurrency, secondCurrency, value);
  } else {
     alert("Currency cannot be the same !");
  }
});

// Function to convert the currencies by fetching the rate from th API
function convert(firstCurrency, secondCurrency, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${firstCurrency}&to=${secondCurrency}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      // Displaying the conversion rate in the output element
      ans.value = Object.values(val.rates)[0];
    });
}  