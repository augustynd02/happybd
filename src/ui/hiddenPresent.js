const hiddenContainer = document.querySelector('.hidden');

hiddenContainer.addEventListener("mousemove", (e) => {
    const existingCircle = hiddenContainer.querySelector('.circle');
    if (existingCircle) {
        hiddenContainer.removeChild(existingCircle);
    }
    const x = e.clientX;
    const y= e.clientY;
    const containerRect = hiddenContainer.getBoundingClientRect();

    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.top = y - containerRect.top + 'px';
    circle.style.left = x + 'px';
    hiddenContainer.append(circle);
})
