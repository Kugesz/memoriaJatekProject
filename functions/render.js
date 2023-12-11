function Render(cards, dim) {
    if (cards.length != dim ** 2) {
        alert("A dimenziok nem megfeleloek!");
        return;
    }

    document.getElementById("game").style.display = 'block';

    const cardsContainer = document.getElementById("cardsContainer");

    cardsContainer.style.display = 'grid';
    cardsContainer.style.gridTemplateColumns = 'repeat(' + dim + ', 1fr)';
    cardsContainer.style.gridTemplateRows = 'repeat(' + dim + ', 1fr)';
    cardsContainer.style.aspectRatio = 1/1;
    cardsContainer.style.width = (100 * dim) + (dim - 1) * 10 + 'px';
    let htmlString = ``

    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            let id = i * dim + j
            let column = i+1;
            let row = j+1;
            htmlString += `<div class="flip-card" id="${id}" style="grid-column: ${column}; grid-row: ${row}">
                <div class="flip-card-inner">
                    <div class="flip-card-front"></div>
                    <div class="flip-card-back" id="content${id}">
                    </div>
                </div>
            </div>`;
        }
    }

    cardsContainer.innerHTML = htmlString;

    cardsHTML = document.getElementsByClassName("flip-card");
    Array.from(cardsHTML).forEach(function (cardElement) {
        cardElement.addEventListener('click', function () {
            Active(cards, cardElement);
        });
    });
}