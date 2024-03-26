const hiddenContainer = document.querySelector('.hidden');
const circle = document.querySelector('.circle');

hiddenContainer.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y= e.clientY;
    const containerRect = hiddenContainer.getBoundingClientRect();
    circle.style.top = y - containerRect.top + 'px';
    circle.style.left = x + 'px';
})
