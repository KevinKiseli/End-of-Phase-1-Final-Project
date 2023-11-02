const API_KEY = 'c6aqd6kyKtWK3mauUQv9JLmgMVEdGV';

const BASE_URL = 'https://www.amdoren.com';




// Example of making a GET request using the Fetch API
fetch(`${BASE_URL}/data`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));