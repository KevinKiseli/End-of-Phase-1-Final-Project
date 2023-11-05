End of Phase 1 Project (Currency Converter) :- C.R.E.A.M:

This is a simple currency converter that uses the Frankfurter API to fetch and display currency conversion rates. Users can select two currencies and an amount to convert, and the converted value will be displayed.


Usage:

1. Open the the web browser.
2. Select the currencies you want to convert from and to by clicking on the dropdown menus.
3. Enter the amount you want to convert in the provided input field.
4. Click the "Convert" button to get the converted value.
5. The result will be displayed in the output field.

Note: Trying to convert the same currency will show an error that the user will need to have different currencies to get a conversion rate.

API:

The application utilizes the Frankfurter API ("https://api.frankfurter.app/currencies") to fetch currency conversion rates. The available currencies are fetched from the API and dynamically populated in the webpage.

Code Structure:

The code consists of the following components:

1. select: Selects the currency elements from the DOM.
2. btn: Represents the button element.
3. num: Represents the amount input field.
4. ans: Represents the converted answer value given in the output field.

The script first fetches the list of available currencies from the API and populates them in the dropdown menus. 
When the "Convert" button is clicked, the provided currencies and amount are used to make another API call to get the converted value, which is displayed in the output field.

Contributions:

Contributions to this project are always welcome. If you find any issues or have suggestions for improvements, please feel free to create an issue or a pull request in the repository.

Author:
Kevin Kiseli

Github link:
https://github.com/KevinKiseli/End-of-Phase-1-Final-Project

This project is open source and welcomes contributions.
