// Declaracion de Variables
// windows cuando escuches el eveanto load cargas la funcion
window.addEventListener('load', function() {
  /* Versión 0.0.1 */
  // Declara variable accederá directamente al elemento button mediante la funcion 'getElementById'
  var btnTwittear = document.getElementById('tweet-button');
  // Declara variable accederá directamente al elemento section mediante la funcion 'getElementById'
  var container = document.getElementById('container');
  // Declara variable accederá directamente al elemento spa 'counter' mediante la funcion 'getElementById'
  var count = document.getElementById('counter');
  // Variable que almacenara la cantidad de caracteres asignados al elemento spa
  var maxChar = count.innerHTML = 140;
  
  btnTwittear.addEventListener('click', function() {
    // Crea elemento div que contendra los tweets ingresados
    var divContentTweet = document.createElement('div');
    // Agregando div dentro del contenedor en html
    container.appendChild(divContentTweet);
    // Creando elemento parrafo para el tweet
    var tweet = document.createElement('p');
    // Agregando el tweet al parrafo
    tweet.textContent = document.getElementById('tweet-box').textContent;
    // Agregando el parrafo al div
    divContentTweet.appendChild(tweet);
    // dando estilo a los divs creados mediante clases por medio atributos
    divContentTweet.classList.add('show-tweets');
    // Limpiar caja de texto
    area.textContent = ' ';
    /* Mostrar hora */
    showTime(divContentTweet);
    // Deshabilitando el boton
    btnTwittear.disabled=true;
    // asigando contador inicial
    count.innerHTML = 140
  });
  /* Versión 0.0.2 - Versión 0.0.3 */
  // Declara variable accederá directamente al elemento area texto mediante la funcion 'getElementById'
  var area = document.getElementById('tweet-box');
  // Se le agrega al objeto el evento (keypress), y la funcion que se va a ejecutar al presionar cualquie tecla...('presionar')
 
  area.addEventListener('keydown', function(event) {
    // Habilitando boton
    btnTwittear.disabled = false;
    var numberCharacteres = event.target.textContent.length + 1;
    count.innerHTML = maxChar - numberCharacteres; 
    /* Versión 0.0.3 */
    // Si longitud del texto es mayor de 120
    if  (numberCharacteres > 120) {
      // Se añade clase por medio de classList para el estilo
      count.classList.add('green-120');
    }
    if  (numberCharacteres > 130) {
      // Se añade clase por medio de classList para el estilo
      count.classList.add('yellow-130');
    }
    if (numberCharacteres > 140) {
      // Se añade clase por medio de classList para el estilo
      count.count.classList.add('red-140');
      // Deshabilitando el boton
      btnTwittear.disabled = true;
    } 
    showResize(event);
  });

  /* Funcion que mostrara la hora en el nodo que se ingresará como parametro*/
  function showTime(element) {
    // Declara variable que almacena la fecha
    var dataTime = new Date();
    // Declara variable que almacena la hora
    var hours = dataTime.getHours();
    // Declara variable que almacena los minutos
    var minutes = dataTime.getMinutes();
    // Declara variable que almacena el formato de hh:mm
    var tweetTime = hours + ':' + minutes;
    // Crea elemento spa en el html
    var horary = document.createElement('spa');
    // Se mostrara la hora en contenido del elemento
    horary.textContent = tweetTime;
    // Añadiendo la hora al elemento asignado
    element.appendChild(horary);
    
  }
});