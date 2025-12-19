function setColor(color) {
    document.body.style.backgroundColor = color;
}

function randomColor() {
    let colors = ["red", "green", "blue"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
