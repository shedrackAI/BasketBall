const btn = document.querySelector('button');
const loaderContainer = document.querySelector('.loader-container');
const loaderBar = document.querySelector('.loader');
const text = document.querySelector('.text');

let x = 0;

setInterval(() => {
    loaderBar.style.width = x + 'px';
    if(x > 2) {
        //x--;
        x -= 7;
    } else {
        let x = 1;
        text.style.top = '10px';
        text.style.opacity = '0';
    }
    console.log(x)
}, 400);

function min() {
    x+= 40;

    
}

btn.addEventListener('click', () => {
    min();
    if(x > 820) {
        text.style.top = '-180px';
        text.style.opacity = '1';
    } 
})