  <!-- Esercizio di oggi: Vue Slider
nome repo: vue-slider
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e un array di oggetti. Le immagini sono le stesse della volta scorsa, sotto trovate l'array di oggetti!
:avviso: Attenzione: ricordate di copiare il template HTML dall'esercizio precedente aiutandovi con la console.
Bonus:
1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Se stiamo ripetendo della logica possiamo aiutarci sicuramente centralizzando il codice!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;
Buon lavoro e buon divertimento!
Di seguito l'array di oggetti da utilizzare come dati:
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]; -->


# VUE Slider
## FASE 1 - Preliminare
- Crare il markup.
- Crare l'array di oggetti.
- Creare una chiave `currentIndex` che fungerà da indice dell'array su cui far ruotare le immagini.

<br>

## FASE 2 - Logica Immagini
- Crare una funzione `currentImage` che ritorna l'immagine indice.
  - **PER OGMI** immagine in `images`:
    - Prelevare l'immagine indice.
  - *Ritornare* l'immagine indice.
## FASE 2b - Logica Thumbnails
- Come per FASE 2 cambia solo la classe active.

<br>

## FASE 3 - Svolgimento
- Crare una funzione `incrementIndex` che aumenta `currentIndex` di 1.
- Crare una funzione `decrementIndex` che diminuisce `currentIndex` di 1.
- Associare al bottone next `incrementIndex`.
- Associare al bottone prev `decrementIndex`.




