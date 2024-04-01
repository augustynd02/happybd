const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entryGalleryAnimation();
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
});

observer.observe(document.querySelector("#gallery-section"));

const entryGalleryAnimation = () => {
    const left = document.querySelector(".gallery-container:has(.gallery[data-category='randki'])")
    left.classList.add("gallery-left-animation");
    const bottom = document.querySelector(".gallery-container:has(.gallery[data-category='wyjscia'])")
    bottom.classList.add("gallery-bottom-animation")
    const right = document.querySelector(".gallery-container:has(.gallery[data-category='losowe'])")
    right.classList.add("gallery-right-animation");
}

const createPopupGallery = (category) => {
    const body = document.querySelector("body");

    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    popupContainer.addEventListener("click", (e) => {
        if (e.target.nodeName === "IMG") {
            window.open(e.target.src);
            return;
        }
        closePopup();
    })
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");
    const slideshow = document.createElement("div");
    slideshow.setAttribute("data-category", category);
    slideshow.classList.add("slideshow");
    slideshow.append(...insertImages(category));

    const left = document.createElement("button");
    left.classList.add("left");
    left.addEventListener("click", (e) => {
        e.stopPropagation();
        switchImage("left");
    })

    const right = document.createElement("button");
    right.classList.add("right");
    right.addEventListener("click", (e) => {
        e.stopPropagation();
        switchImage("right");
    })

    slideshowContainer.append(slideshow);
    popupContainer.append(slideshowContainer, left, right);
    body.appendChild(popupContainer);
    body.style.overflow = "hidden";
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
for (let i = 0; i < galleries.length; i++) {
    galleries[i].addEventListener("click", (e) => {
        createPopupGallery(galleries[i].getAttribute("data-category"));
    });
}

const insertImages = (category) => {
    let images = [];
    switch (category) {
        case "randki":
            for (let i = 0; i < 30; i++) {
                let img = document.createElement("img");
                img.src = `assets/gallery-images/randki/${i}.jpg`;
                img.setAttribute("data-index", `${i}`);
                if (i == 0) img.classList.add("active");
                else img.classList.add("inactive");
                images.push(img);
            }
            break;
        case "wyjscia":
            for (let i = 0; i < 12; i++) {
                let img = document.createElement("img");
                img.src = `assets/gallery-images/wyjscia/${i}.jpg`;
                img.setAttribute("data-index", `${i}`);
                if (i == 0) img.classList.add("active");
                else img.classList.add("inactive");
                images.push(img);
            }
            break;
        case "losowe":
            for (let i = 0; i < 26; i++) {
                let img = document.createElement("img");
                img.src = `assets/gallery-images/losowe/${i}.jpg`;
                img.setAttribute("data-index", `${i}`);
                if (i == 0) img.classList.add("active");
                else img.classList.add("inactive");
                images.push(img);
            }
            break;
    }
    return images;
}

const closePopup = () => {
    const popupContainer = document.querySelector(".popup-container");
    document.body.removeChild(popupContainer);
    document.body.style.overflow = "hidden visible";
}
