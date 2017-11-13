//Declaracion de Variables
window.onload = function(){


    document.getElementById('tweet-button').addEventListener('click',showTweet);
    document.getElementById('tweet-box').addEventListener('onkeyup',countCharacteres);
    document.getElementById('tweet-box').addEventListener('onkeydown',countCharacteres);
  

};

/* Version 0.0.1 */  
function showTweet(){
  /*   //Declara variable para asignar el valor del texto en un parrafo
    var msg='<p>'+ document.getElementById('tweet-box').value + '</p>';

    var tweet=document.getElementById('tweets-content');
     tweet.innerHTML=msg; */ 
    //Obtengo el texto
    var msg=document.getElementById('tweet-box').value;
    var p= document.createElement('p');
    var t=document.createTextNode(msg);
    p.appendChild(t);
    //Agrega el texto al HTML
    document.body.appendChild(p);
}

function countCharacteres(){
    var textArea=document.getElementById('tweet-box').value;
    var numberCharacteres=textArea.length;
    document.getElementById('tweet-counter').textContent=numberCharacteres;
    alert();

}