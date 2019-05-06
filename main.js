// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  "nome": "andrea",
  "cognome": "baldocchi",
  "eta": 25
}

for (var field in studente) {
  console.log(field + ": " + studente[field]);
}

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var studenti = [
  {
    "nome": "andrea",
    "cognome": "baldocchi",
    "eta": 25
  },
  {
    "nome": "marco",
    "cognome": "rossi",
    "eta": 20
  },
  {
    "nome": "giacomo",
    "cognome": "verdi",
    "eta": 17
  }
];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}


// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

function add_stud(){
  var nuovo_nome = prompt("inserisci un nuovo nome");
  var nuovo_cognome = prompt("inserisci un nuovo cognome");
  var nuova_età = prompt("inserisci una nuova età");

  studenti.push(
    {
      "nome": nuovo_nome,
      "cognome": nuovo_cognome,
      "eta": +nuova_età
    }
  );
}

add_stud();

console.log(studenti);
