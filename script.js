const container = document.querySelector('.canvas');

const sizeText = document.querySelector('.size-text');
sizeText.textContent = '16 x 16';

function changeColor (e) {
    const square = e.target;
    square.style.backgroundColor = 'black';
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${500 / size}px`;
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

const slider = document.querySelector('.slider');

function getNewSize(e) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    const val = e.target.value;
    sizeText.textContent = `${val} x ${val}`
    createGrid(val);
}

function clear() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.backgroundColor = 'white')
}

slider.addEventListener('change', getNewSize);

const reset = document.querySelector('.reset');

reset.addEventListener('click', clear);


createGrid(16);