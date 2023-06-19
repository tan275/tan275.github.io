const texts = ["create like an artist, solve like an engineer."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
var speed=30;

(function type(){

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, speed);
})();

