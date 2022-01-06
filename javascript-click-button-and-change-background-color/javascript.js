
/**
 * HTML Colors Section
 */
var colors = ['f','e','d','c','b','a',0,1,2,3,4,5,6,7,8,9];

/**
 * if click button , changeColor function and background color is change
 */
function changeColor(){
    var a =Math.floor(Math.random() * 16);
    var b =Math.floor(Math.random() * 16);
    var c =Math.floor(Math.random() * 16);
    var d =Math.floor(Math.random() * 16);
    var e =Math.floor(Math.random() * 16);
    var f =Math.floor(Math.random() * 16);

    /**
     * This section is for adding attribute to body style inside html tag. This property consists of colors returned from our function
     */
    document.getElementsByTagName("body")[0].style.backgroundColor="#"+colors[a]+colors[b]+colors[c]+colors[d]+colors[e]+colors[f];

}
