window.load = slide(1);

let bgNumber = 1;
let allBgs = 3;

function slide(n) {                       
    document.getElementById('imageBg').style.backgroundImage = `url(img/`+n+`.jpg)`;

}

function anterior() {
    if(bgNumber > 1){
        bgNumber--;
        slide(bgNumber);
    } else if(bgNumber == 1){
        bgNumber = 3;
        slide(bgNumber);
    } else {

    }
}

function proximo() {
    if(bgNumber < 3){
        bgNumber++;
        slide(bgNumber);
    } else if(bgNumber == 3){
        bgNumber = 1;
        slide(bgNumber);
    } else {
        
    }
}