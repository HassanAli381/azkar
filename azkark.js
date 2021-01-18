var zekr = document.querySelector('#zekr');
let counter = 0;
function count () {
    counter++;
    document.querySelector('#num').innerHTML = counter;
    if (zekr.textContent === 'سبحان الله') {
        zekr.textContent = 'الحمد لله'
    } else if (zekr.textContent === 'الحمد لله') {
        zekr.textContent = 'لا إله إلا الله';
    }  else if (zekr.textContent === 'لا إله إلا الله') {
        zekr.textContent = 'الله أكبر';
    }  else if (zekr.textContent === 'الله أكبر') {
        zekr.textContent = 'لا حول ولا قوه الا بالله العلى العظيم';
    }  else if (zekr.textContent === 'لا حول ولا قوه الا بالله العلى العظيم') {
        zekr.textContent = 'سبحان الله';
    }

    if (counter %5 === 0) {
        alert (`Counter Now is: ${counter}`);
    } 
    //zekr.style.transition = '1s all ease-in-out';
}

var zekrContainer = document.querySelector('#item');
var zekrText = document.querySelector('#text-zekr');

zekrContainer.onclick = function () {
    zekrText.classList.toggle('text-zekr');
}




































































