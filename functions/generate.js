let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

function GenerateCards(dim) {
    let generatedCards = [];
    let availableCards = cards;
    let pickableCards = [];
    let cardsNumber = dim ** 2;

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