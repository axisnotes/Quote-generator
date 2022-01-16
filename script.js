let button = document.getElementById("btn");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

function fetchQuote() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
        .then(resp => resp.json())
        .then(data => {
            quote.innerHTML = data.en;
            author.innerHTML = data.author;
        });

};

button.addEventListener("click", fetchQuote);