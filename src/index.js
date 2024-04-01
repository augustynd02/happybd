import './styles/main.css';
import './styles/header.css';
import './styles/content.css';
import './styles/footer.css';
import './styles/animations.css';
import './styles/card.css';
import './styles/hiddenpresent.css';
import './styles/gallery.css';
import './styles/presentgame.css';

import './assets/flowers.jpg';
import './assets/gallery-images/randki/0.jpg';
import './assets/gallery-images/randki/1.jpg';
import './assets/gallery-images/randki/2.jpg';
import './assets/gallery-images/randki/3.jpg';
import './assets/gallery-images/randki/4.jpg';
import './assets/gallery-images/randki/5.jpg';
import './assets/gallery-images/randki/6.jpg';
import './assets/gallery-images/randki/7.jpg';
import './assets/gallery-images/randki/8.jpg';
import './assets/gallery-images/randki/9.jpg';
import './assets/gallery-images/randki/10.jpg';
import './assets/gallery-images/randki/11.jpg';
import './assets/gallery-images/randki/12.jpg';
import './assets/gallery-images/randki/13.jpg';
import './assets/gallery-images/randki/14.jpg';
import './assets/gallery-images/randki/15.jpg';
import './assets/gallery-images/randki/16.jpg';
import './assets/gallery-images/randki/17.jpg';
import './assets/gallery-images/randki/18.jpg';
import './assets/gallery-images/randki/19.jpg';
import './assets/gallery-images/randki/20.jpg';
import './assets/gallery-images/randki/21.jpg';
import './assets/gallery-images/randki/22.jpg';
import './assets/gallery-images/randki/23.jpg';
import './assets/gallery-images/randki/24.jpg';
import './assets/gallery-images/randki/25.jpg';
import './assets/gallery-images/randki/26.jpg';
import './assets/gallery-images/randki/27.jpg';
import './assets/gallery-images/randki/28.jpg';
import './assets/gallery-images/randki/29.jpg';
import './assets/gallery-images/randki/30.jpg';
import './assets/gallery-images/randki/31.jpg';


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


