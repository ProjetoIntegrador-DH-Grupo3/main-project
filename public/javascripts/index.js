window.load = slide(1);

var bgNumber = 1;
var allBgs = 3;
var clearTime;

function slide(n) {  
    document.getElementById('imageBg').style.backgroundImage = `url(img/${n}.jpg)`;                   
    document.getElementById('imageBg2').style.backgroundImage = `url(img/${n}.png)`;
    document.getElementById('imageBg3').style.backgroundImage = `url(img/${n}.svg)`;
    slideComTemporizador()
}

function slideComTemporizador() {
    clearTime = setTimeout(() => {
        proximo();
        slide(bgNumber);
    }, 6000); 
}
function anterior() {
    clearTimeout(clearTime);
    if(bgNumber > 1){
        bgNumber--;
        slide(bgNumber);
    } else if(bgNumber == 1){
        bgNumber = 3;
        slide(bgNumber);
    }
    slideComTemporizador();
}

function proximo() {
    clearTimeout(clearTime);

    if(bgNumber < 3){
        bgNumber++;
        slide(bgNumber);
    } else if(bgNumber == 3){
        bgNumber = 1;
        slide(bgNumber);
    }
    slideComTemporizador();
}