// PROGRAMMA CHE STAMPA NUMERI DA 1 A 100.
// Per i multipli di 3 stampa “Fizz” al posto del numero.
// Per i multipli di 5 stampa "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampa "FizzBuzz".



// SETUP
// Dichiaro listaNumeri attribuendo che dovrà vedersi in pagina
// Creo contenutoLista
let listaNumeri = document.getElementById("lista");
let contenutoLista = '';

// ELABORAZIONE
// Stampo i numeri da 1 a 100 col ciclo FOR
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // se il numero è multiplo sia di 3 che di 5 stampo FizzBuzz
        contenutoLista += `<li class="text-primary">FizzBuzz</li>`;
    } else if (i % 3 === 0) { // se il numero è multiplo di 3 stampo Fizz 
        contenutoLista += `<li class="text-warning">Fizz</li>`;
    } else if (i % 5 === 0) { // se il numero è multiplo di 5 stampo Buzz
        contenutoLista += `<li class="text-danger">Buzz</li>`;
    } else { // altrimenti stampo il numero
        contenutoLista += `<li class="text-success"> ${i} </li>`;
    }
}

// OUTPUT
// Aggiungo al contenuto HTML della lista tutti i li che ho creato
listaNumeri.innerHTML = contenutoLista;
