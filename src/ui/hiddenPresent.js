const hiddenContainer = document.querySelector('.hidden');
const circle = document.querySelector('.circle');

hiddenContainer.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y= e.clientY;
    const containerRect = hiddenContainer.getBoundingClientRect();
    circle.style.top = y - containerRect.top + 'px';
    circle.style.left = x + 'px';
})

const placeLink = async () => {
    const link = document.createElement("a");
    link.textContent = "click!";

    const randomTop = Math.floor(Math.random() * 100);
    const randomLeft = Math.floor(Math.random() * 100);
    link.href = "./pages/gift1.html";
    link.target = "_blank";
    link.style.top =`${randomTop}%`;
    link.style.left =`${randomLeft}%`;

    await new Promise(resolve => setTimeout(resolve, 10000));

    hiddenContainer.appendChild(link);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            placeLink();
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
});

observer.observe(hiddenContainer);
