
/**
 * HTML color elements
 */
 var colors = ['f','e','d','c','b','a',0,1,2,3,4,5,6,7,8,9];

 /**
  * Our function
  */
 function changeColor(){
     var a =Math.floor(Math.random() * 16);
     var b =Math.floor(Math.random() * 16);
     var c =Math.floor(Math.random() * 16);
     var d =Math.floor(Math.random() * 16);
     var e =Math.floor(Math.random() * 16);
     var f =Math.floor(Math.random() * 16);
 
     /**
      * Let's combine the resulting random color pieces and assign them to a single variable.
      */
     var color = '#'+colors[a]+colors[b]+colors[c]+colors[d]+colors[e]+colors[f];
     /**
      * And finally, let's send the color we created to the file we called.
      */
     return color;

 
 }
 