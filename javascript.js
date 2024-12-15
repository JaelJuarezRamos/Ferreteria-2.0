const cart = document.getElementById("draggable-cart");

let isDragging = false;
let rotation = 0;

cart.addEventListener("mousedown", (e) => {
    isDragging = true;
    cart.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // Calcula la nueva posición
    const x = e.clientX - cart.offsetWidth / 2;
    const y = e.clientY - cart.offsetHeight / 2;

    // Aumenta la rotación en cada movimiento
    rotation += 5;

    cart.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    cart.style.cursor = "grab";
});
