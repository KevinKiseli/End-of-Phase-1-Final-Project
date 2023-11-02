const API_KEY = 'c6aqd6kyKtWK3mauUQv9JLmgMVEdGV';

const BASE_URL = 'https://www.amdoren.com/currency-converter/';



document.getElementById('fetchBtn').addEventListener('click', getData);

function getData() {
  const fromCurrency = 'USD'; // Set the desired currency
  const toCurrency = 'EUR'; // Set the desired target currency

  const url = `${BASE_URL}?api_key=${API_KEY}&from=${fromCurrency}&to=${toCurrency}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Process the data here
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


