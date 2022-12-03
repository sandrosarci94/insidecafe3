window.onload = async function () {
  console.log(
    'Il file con la logica della pagina è stato caricato correttamente!'
  )
  // per vedere questo messaggio, apri la console del browser: su Chrome o Firefox basta cliccare con il tasto destro in un punto della pagina e selezionare
  // "Ispeziona" o "Analizza"; a questo punto si aprirà un pannello di strumenti di sviluppo. Clicca sul tab "Console" e dovresti visualizzare il messaggio.
  try {
    // 3) Assicurati che il progetto Backend stia girando correttamente sulla porta 3001.
    // Una volta che questo avviene, potrai recuperare i dati sull'endpoint: http://localhost:3001/pasta
    // Una tecnica per contattare un endpoint di un server consiste nell'utilizzare il metodo chiamato 'fetch'.
    // Questo metodo richiede di ricevere tra le parentesi l'endpoint desiderato, tra apici o virgolette.
    // Completa la riga 10 in un modo simile a come abbiamo fatto a lezione.
    let res = await fetch("http://localhost:3001/pasta") // <-- manca qualcosa!
    console.log('La risposta che abbiamo ottenuto è', res)
    if (res.ok) {
      let allThePastas = await res.json() // il metodo .json() ottiene i dati da una risposta ricevuta dal server (il cosiddetto 'body')
      console.log('Ecco i dati che abbiamo ottenuto dal server', allThePastas)
      // 4) Abbiamo ottenuto i dati per le nostre cards, ora cerchiamo nella pagina un punto in cui inserirle. Un buon candidato sembrerebbe essere
      // il <div> con class 'container'. Dobbiamo ottenere un riferimento a quel particolare tag; possiamo utilizzare 'document.querySelector()' come
      // a lezione, ma è necessario passare un valore tra le parentesi: forniscigli la classe del div, preceduta da un punto (il carattere . rappresenta
      // il selettore per le classi), il tutto tra virgolette o apici (perchè il valore dev'essere di tipo stringa).
      let containerReference = document.querySelector(".container") // <-- manca qualcosa!
      console.log('Ecco il riferimento al container', containerReference)
      // 5) Boss finale: cicla allThePastas (che in gergo viene definito un array di oggetti) e inserisci dinamicamente 3 cards nel container della pagina.
      // Proseguiamo per steps: come a lezione, un metodo molto efficace è utilizzare un costrutto chiamato 'forEach' sul tuo array; questa tecnica scorrerà
      // tutti i piatti di pasta, e ti permetterà di eseguire un'operazione su ognuno di essi. L'operazione che vuoi eseguire è aggiungere alla proprietà
      // 'innerHTML' di containerReference la card che hai creato nell'ultima esercitazione individuale.
      // Sembra molto complicato, ma è davvero molto simile a quello che abbiamo fatto a lezione. Ricordati che all'interno di 'forEach' hai sempre
      // a tua disposizione un riferimento alla pasta con cui stai creando la card, quindi puoi utilizzare la sua picture, il suo name, i suoi ingredients
      // e il suo preparationTime per riempire con i giusti contenuti ognuna delle 3 cards che andrai a generare.
      // Non ti scoraggiare, e se sei in difficoltà riguarda le slides e prendi spunto dal codice scritto insieme! Il risultato ti premierà :D
      allThePastas.forEach((pasta) => {

        containerReference.innerHTML = containerReference.innerHTML + `
          <a href= ${pasta.ingredients} class="card" style="width: 18rem;">
          <img src= ${pasta.picture} class="card-img-top" alt="...">
          
          <div class="card-body">
            <h5 class="card-title">${pasta.name}</h5>
            <p class="card-text"></p>
            >
            
            
          </div>
          </a>
        `

    })
            
    } else {
      console.log('Abbiamo ricevuto un errore dal server')
    }
  } catch (error) {
    console.log(error)
  }
}
