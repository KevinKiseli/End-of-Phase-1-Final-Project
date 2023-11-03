

const select = document.querySelectorAll(".Currency");
const btn = document. getElementById("btn");
const num = document.getElementById("numbers");
const answer = document.getElementById("answer");


fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++){
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
    let firstCurrency = select[0].value;
    let secondCurrency = select[0].value;
    let value = num.value;

    if(firstCurrency != secondCurrency) {
        convert(firstCurrency, secondCurrency, value);
    } else {
        alert("Currencies cannot same, please change one");
    }
});

    function convert(firstCurrency, secondCurrency, value) {
        const api = "https://api.frankfurter.app/currencies";
        
        fetch(`https://${api}/latest?amount=${value}&from=${firstCurrency}&to=&${secondCurrency}`
        )
            .then ((val) => val.json())
            .then((val) => {
                console.log(Object.values
                (val.rates)[0]);
                answer.value = Object.values
                (val.rates)[0];
            });

    }
    
    





  