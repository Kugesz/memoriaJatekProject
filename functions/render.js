function Render(cards, x, y){
    if(cards.length != x*y){
        alert("A dimenziok nem megfeleloek!");
        return;
    }

    document.body.innerHTML = `<div id="cardsContainer"></div>`;

    const cardsContainer = document.getElementById("cardsContainer");

    cardsContainer.style.display = 'grid';
    cardsContainer.style.gridTemplateColumns = 'repeat(' + x + ', 1fr)';
    cardsContainer.style.gridTemplateRows = 'repeat(' + y + ', 1fr)';
    cardsContainer.style.aspectRatio = x + '/' + y;
    cardsContainer.style.width = (100 * x) + (x-1) * 10+ 'px';
    let s = ``

    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
            s += `  <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front"></div>
            <div class="flip-card-back">
            `+ cards[i*4 + j]+`
            </div>
            </div>
        </div>`
        }
    }

    cardsContainer.innerHTML = s;

    cardsHTML = document.getElementsByClassName("flip-card");
    Array.from(cardsHTML).forEach(function(element) {
        element.addEventListener('click', function() {
            element.classList.toggle('active');
        });
    });
}