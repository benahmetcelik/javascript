let eyeBall = document.querySelector('#eyeBall');
let eyeBall2 = document.querySelector('#eyeBall2');
let tongue =document.querySelector('#tongue');
let smile =document.querySelector('#smile');

document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    eyeBall.style.transition = "0.6s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;
    eyeBall2.style.transition = "0.6s";
    eyeBall2.style.left = x;
    eyeBall2.style.top = y;
    
}

document.onmouseout = (event) => {
    eyeBall.style.transition = "0.7s";
    eyeBall.style.left = "50%";
    eyeBall.style.top = "50%";
    eyeBall2.style.transition = "0.7s";
    eyeBall2.style.left = "50%";
    eyeBall2.style.top = "50%";
}




document.onmouseover = (event) => {
    smile.style.transition = "0.7s";
    smile.style.height = "20%";
   // smile.style.top = "50%";
}

document.onmouseout = (event) => {
    smile.style.transition = "0.7s";
    smile.style.height = "10%";
   // smile.style.top = "50%";
}



function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  function showDate() {
    // Günler
    var weekday = new Array(7);
    weekday[1] = 'Pazar';
    weekday[2] = 'Pazartesi';
    weekday[3] = 'Salı';
    weekday[4] = 'Çarşamba';
    weekday[5] = 'Perşembe';
    weekday[6] = 'Cuma';
    weekday[7] = 'Cumartesi';
    // Aylar
    var month = new Array(12);
    month[1] = 'Ocak';
    month[2] = 'Şubat';
    month[3] = 'Mart';
    month[4] = 'Nisan';
    month[5] = 'Mayıs';
    month[6] = 'Haziran';
    month[7] = 'Temmuz';
    month[8] = 'Ağustos';
    month[9] = 'Eylül';
    month[10] = 'Ekim';
    month[11] = 'Kasım';
    month[12] = 'Aralık';

    var today = new Date();

yr_st = " 19";
yr = today.getYear();
if ( yr > 99 )
{
yr_st =" ";
if ( yr < 2000 ) yr += 1900;
}
document.getElementById('date').innerHTML = ( today.getDate() + ' ' + month[today.getMonth()+1] + ' ' +yr_st+ yr + ' | ' +weekday[today.getDay()+1] );
}

showDate();
