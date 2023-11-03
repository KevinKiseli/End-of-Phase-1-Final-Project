

const select = document.querySelectorAll(".Currency");
const btn = document. getElementById("btn");
const num = document.getElementById("num");
const answer = document.getElementById("answer");


fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
  const entries = Object.entries(data);
  entries.forEach((entry) => {
    select[0].innerHTML += `<option value="${entry[0]}">${entry[0]}</option>`;
    select[1].innerHTML += `<option value="${entry[0]}">${entry[0]}</option>`;
  });
}

