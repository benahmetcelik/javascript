
/*
let light =document.querySelector('#light');
let lens = document.querySelector('#lens');
document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    light.style.transition = "0.4s";
    light.style.left = x;
    light.style.top = y;
    lens.style.left =x;
    lens.style.top =y;
    lens.style.background = 'rgb(255, 123, 0)';

}


document.onmouseout = (event) => {
    light.style.transition = "0.7s";
    light.style.left = "50%";
    light.style.top = "50%";
    light.style.background = 'rgb(255, 255, 255, 0.486)';

}
*/

function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)