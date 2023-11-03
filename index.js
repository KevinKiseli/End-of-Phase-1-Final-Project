

const select = document.querySelectorAll(".Currency");
const btn = document. getElementById("btn");
const num = document.getElementById("num");
const answer = document.getElementById("answer");


fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

