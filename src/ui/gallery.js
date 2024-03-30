
const createPopupGallery = (category) => {
    const body = document.querySelector("body");

    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");
    const slideshow = document.createElement("div");
    slideshow.setAttribute("data-category", category);
    slideshow.classList.add("slideshow");
    slideshow.append(...insertImages(category));

    const left = document.createElement("button");
    left.classList.add("left");
    left.addEventListener("click", () => {
        switchImage("left");
    })

    const right = document.createElement("button");
    right.classList.add("right");
    right.addEventListener("click", () => {
        switchImage("right");
    })

    slideshowContainer.append(slideshow, left, right);
    popupContainer.append(slideshowContainer);
    body.appendChild(popupContainer);
}

const switchImage = (direction) => {
    const activeElement = document.querySelector(".slideshow img.active");
    const activeIndex = Number(activeElement.getAttribute("data-index"));
    let nextIndex;
    if (direction === "right") {
        nextIndex = activeIndex + 1;
    } else {
        nextIndex = activeIndex - 1;
    }
    const nextElement = document.querySelector(`.slideshow img[data-index="${nextIndex}"]`);
    if (nextElement) {
        if (direction === "right") {
            activeElement.classList = [];
            activeElement.classList.add("inactive");
            activeElement.classList.add("inactive-to-right")

            nextElement.classList = [];
            nextElement.classList.add("active");
        } else {
            activeElement.classList = [];
            activeElement.classList.add("inactive");
            activeElement.classList.add("inactive-to-left")

            nextElement.classList = [];
            nextElement.classList.add("active");
        }
    }
}

const galleries = document.querySelectorAll('.gallery');
for(let i = 0; i < galleries.length; i++) {
    galleries[i].addEventListener("click", (e) => {
        createPopupGallery(galleries[i].getAttribute("data-category"));
    });
}

const insertImages = (category) => {
    console.log(category);
    switch(category) {
        case "randki":
            const img1 = document.createElement("img");
            img1.src = "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww";
            img1.setAttribute("data-index", '0');
            img1.classList.add("active");
            const img2 = document.createElement("img");
            img2.src = "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww";
            img2.setAttribute("data-index", '1');
            img2.classList.add("inactive");
            const img3 = document.createElement("img");
            img3.src = "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww";
            img3.setAttribute("data-index", '2');
            img3.classList.add("inactive");
            const img4 = document.createElement("img");
            img4.src = "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww";
            img4.setAttribute("data-index", '3');
            img4.classList.add("inactive");

            return [img1, img2, img3, img4];
        case "wyjazdy":
            break;
        case "losowe":
            break;
    }
}
