

function checkf(event){

  const image = event.currentTarget;
  const che = image.querySelector('.checkbox');
  const bottone = document.querySelector('.ricomincia');
  che.src = './images/checked.png'; /*appena clicco vado a sostituire quello che mi arriva cliccando*/

  image.classList.add('selezionato');

  const patina = image.querySelector('.sfuocatura');
  if(patina.classList.contains('hidden') === false){ /*se non c'è hidden l'aggiungo*/ 

    patina.classList.add('hidden');

  }


  for(let i=0; i<quadratini.length ; i++){

    if(quadratini[i].dataset.questionId  === event.currentTarget.dataset.questionId){

      if(quadratini[i] !== event.currentTarget){ /*quando clicco, le cose che non ho cliccato che fanno? ->*/

        let s = quadratini[i].querySelector('.sfuocatura');
        s.classList.remove('hidden'); /*si vede la sfuocatura*/

        let im = quadratini[i].querySelector('.checkbox');

        im.src = './images/unchecked.png';

        if(quadratini[i].classList.contains('selezionato')){


          quadratini[i].classList.remove('selezionato');


        }


      }

 


    }


    if(datiq[0] !== null && datiq[1] !== null && datiq[2] != null){ /*do solo una possibilità di riiscelta alla domanda 3 perchè alla 3 domanda io devo interrompere gli event listener ma da consegna io devo dare la possibilità di scegliere*/


      quadratini[i].removeEventListener('click',checkf);

      bottone.classList.remove('hidden');
      
  
    }

  }
  
  riempilista(event.currentTarget.dataset.choiceId, event.currentTarget.dataset.questionId);
  console.log(datiq); /*controllo i dati che ho inserito*/ 

          
 
  bottone.classList.remove('hidden');



}

const quadratini = document.querySelectorAll('.box');
const resetta = document.querySelector('button');
resetta.addEventListener('click', click);
console.log(quadratini); /*controllo che prendo*/ 
let datiq = [null,null,null]; 




for(let i=0 ; i< quadratini.length ; i++){

  quadratini[i].addEventListener('click', checkf);

}

function riempilista(choiceIDe, questionIde){ /* per regolamentare poi il risultato */

  if (questionIde === 'one'){

    datiq[0] = choiceIDe;

  }

  if (questionIde === 'two'){

    datiq[1] = choiceIDe;

  }

  if (questionIde === 'three'){

    datiq[2] = choiceIDe;

  }




  risultatofin();

  
  
}


function risultatofin(){

  

  if(datiq[0] !== null && datiq[1] !== null && datiq[2] != null){ /*fino a quando la lista non è riempita*/ 

    if(datiq[0]!== datiq[1] && datiq[1]!== datiq[2]){

      const titolo = document.getElementById("titolo");
      const testo = document.getElementById("testo");
      const bottone = document.querySelector('.ricomincia');


      titolo.textContent= RESULTS_MAP[datiq[0]].title;
      testo.textContent= RESULTS_MAP[datiq[0]].contents;

      titolo.classList.remove('hidden'); /**se ricomincio il quiz questi hidden mi fanno riivisualizzare il testo */
      testo.classList.remove('hidden');
      bottone.classList.remove('hidden');
      

    }

    if(datiq[2]!== datiq[1] && datiq[1]!== datiq[0]){

      const titolo = document.getElementById("titolo");
      const testo = document.getElementById("testo");
      const bottone = document.querySelector('.ricomincia');


      titolo.textContent= RESULTS_MAP[datiq[0]].title;
      testo.textContent= RESULTS_MAP[datiq[0]].contents;

      titolo.classList.remove('hidden'); /**se ricomincio il quiz questi hidden mi fanno riivisualizzare il testo */
      testo.classList.remove('hidden');
      bottone.classList.remove('hidden');
      

    }

    if(datiq[0] == datiq[1] && datiq[1] == datiq[2]){

      const titolo = document.getElementById("titolo");
      const testo = document.getElementById("testo");
      const bottone = document.querySelector('.ricomincia');

      titolo.textContent= RESULTS_MAP[datiq[0]].title;
      testo.textContent= RESULTS_MAP[datiq[0]].contents;

      titolo.classList.remove('hidden');
      testo.classList.remove('hidden');
      bottone.classList.remove('hidden');
      

    }


    if(datiq[0]!== datiq[1] && datiq[1]!== datiq[2]){

      const titolo = document.getElementById("titolo");
      const testo = document.getElementById("testo");
      const bottone = document.querySelector('.ricomincia');


      titolo.textContent= RESULTS_MAP[datiq[0]].title;
      testo.textContent= RESULTS_MAP[datiq[0]].contents;

      titolo.classList.remove('hidden');
      testo.classList.remove('hidden');
      bottone.classList.remove('hidden');
      

    }

    if(datiq[0]== datiq[1] && datiq[1]!== datiq[2]){ 

      const titolo = document.getElementById("titolo");
      const testo = document.getElementById("testo");
      const bottone = document.querySelector('.ricomincia');


      titolo.textContent= RESULTS_MAP[datiq[0]].title;
      testo.textContent= RESULTS_MAP[datiq[0]].contents;

      titolo.classList.remove('hidden');
      testo.classList.remove('hidden');
      bottone.classList.remove('hidden');
      

    }



    
    if(datiq[0]== datiq[2] && datiq[1]!== datiq[2]){

      const titolo = document.getElementById("titolo");
      const testo = document.getElementById("testo");

      titolo.textContent= RESULTS_MAP[datiq[2]].title;
      testo.textContent= RESULTS_MAP[datiq[2]].contents;

      titolo.classList.remove('hidden');
      testo.classList.remove('hidden');
      bottone.classList.remove('hidden');
      

    }



        
    if(datiq[1]== datiq[2] && datiq[0]!== datiq[2]){

      const titolo = document.getElementById("titolo");
      const testo = document.getElementById("testo");
      const bottone = document.querySelector('.ricomincia');

      titolo.textContent= RESULTS_MAP[datiq[1]].title;
      testo.textContent= RESULTS_MAP[datiq[1]].contents;

      titolo.classList.remove('hidden');
      testo.classList.remove('hidden');
      bottone.classList.remove('hidden');
      

    }


  

  }



}


function click(){



  /*removeEventListener('click',click);*/

  const che = document.querySelectorAll('.checkbox');
  const selezionati = document.querySelectorAll('.selezionato');
  const sfuocati = document.querySelectorAll('.sfuocatura');
  const hidden = document.querySelectorAll('.hidden');
  const titolo = document.querySelector('#titolo');
  const testo = document.querySelector('#testo');
  const bottone = document.querySelector('.ricomincia');




  for(let i=0; i < che.length; i++){

    che[i].src = './images/unchecked.png';

  }

  for(let i=0 ; i < selezionati.length; i++){

    selezionati[i].classList.remove('selezionato');


  }

  for(let i=0 ; i < sfuocati.length; i++){

    sfuocati[i].classList.remove('sfuocati'); /*rimuovo la sfuocatura e poi la riaggiungo*/
    sfuocati[i].classList.add('hidden');

  }

  titolo.classList.add('hidden');
  testo.classList.add('hidden');
  





  for(let i=0 ; i< quadratini.length ; i++){ /* riiaggiungo gli event listener ai quadretti */
 
    quadratini[i].addEventListener('click', checkf);
  
  }

  datiq[0] = null; /* libero la lista di appoggio */
  
  datiq[1] = null;

  datiq[2] = null;

  bottone.classList.add('hidden');

}