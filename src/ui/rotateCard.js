const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".card");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

cardContainer.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    /*
        calculate the rotation degrees using linear interpolation
        cursor's X position is used to rotate along the Y 3D axis
        cursor's Y position is used to rotate along the X 3D axis
    */
    const xDegrees = ((-80 * y) / windowHeight) + 40;
    const yDegrees = ((80 * x) / windowWidth) - 40;

    card.style.transform = `rotateX(${xDegrees}deg) rotateY(${yDegrees}deg)`;
})
