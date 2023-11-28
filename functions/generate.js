let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20];

function GenerateCards(x, y) {
    let generatedCards = [];
    let availableCards = cards;
    let pickableCards = [];
    let cardsNumber = x * y;

    for (let i = 1; i <= cardsNumber / 2; i++) {
        let r = Math.floor(Math.random() * availableCards.length);
        if (r !== 0) {
            r--;
        }
        pickableCards.push(availableCards[r]);
        availableCards.splice(r, 1);
    }
    pickableCards = pickableCards.concat(pickableCards);
    generatedCards = pickableCards.sort((a, b) => 0.5 - Math.random());


    if(generatedCards.length != cardsNumber){alert("valami szar ocsi!!!");}
    return generatedCards;
}