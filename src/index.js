import './styles/main.css';
import './styles/header.css';
import './styles/content.css';
import './styles/footer.css';
import './styles/animations.css';
import './styles/card.css';
import './styles/hiddenpresent.css'
import './styles/gallery.css'

import './assets/flowers.jpg';

import './ui/rotateCard';
import './ui/hiddenPresent';
import './ui/gallery';
import Confetti from './ui/confetti';

const header = document.querySelector("header");

header.addEventListener("animationend", (e) => {
    if (e.animationName === "slide-from-top") {
        new Confetti(header);
    }
})


