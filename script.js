let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
   
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight * 1.2;

    if (value < maxScroll) {
        text.style.marginTop = value * 1.5 + 'px';
        leaf.style.top = value * -1.6 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill1.style.top= value * 1 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left= value * -1.5 + 'px';
    }


    // text.style.marginTop = value * 2.5 + 'px';
    // leaf.style.top = value * -1.5 + 'px';
    // leaf.style.left = value * 1.5 + 'px';
    // hill1.style.top= value * 1 + 'px';
    // hill5.style.left = value * 1.5 + 'px';
    // hill4.style.left= value * -1.5 + 'px';


})

