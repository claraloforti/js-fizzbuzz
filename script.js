// PROGRAMMA CHE STAMPA NUMERI DA 1 A 100.
// Per i multipli di 3 stampa “Fizz” al posto del numero.
// Per i multipli di 5 stampa "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampa "FizzBuzz".



// SETUP
let listaNumeri = document.getElementById("lista");

// ELABORAZIONE

// Stampo i numeri da 1 a 100 col ciclo FOR
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // se il numero è multiplo sia di 3 che di 5 stampo FizzBuzz
        console.log('FizzBuzz')
        listaNumeri.innerHTML += `<li class="text-primary">FizzBuzz</li>`;
    }
    else if (i % 3 === 0) { // se il numero è multiplo di 3 stampo Fizz 
        console.log('Fizz')
        listaNumeri.innerHTML += `<li class="text-warning">Fizz</li>`;
    }

    else if (i % 5 === 0) { // se il numero è multiplo di 5 stampo Buzz

        console.log('Buzz');
        listaNumeri.innerHTML += `<li class="text-danger">Buzz</li>`;
    }
    else {
        console.log(i);
        listaNumeri.innerHTML += `<li class="text-success"> ${i} </li>`;
    }
}

// OUTPUT

