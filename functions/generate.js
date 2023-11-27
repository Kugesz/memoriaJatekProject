cards = [1,2,3,4,5,6,7,8,9]

function GenerateCards(x,y){
    let generatedCards = []
    let alivableCards = cards;
    let pickableCards = []
    let cardsNumber = x * y;

    for(let i = 1; i <= cardsNumber / 2; i++){
        let r = Math.floor(Math.random() * alivableCards.length) -1;
        pickableCards.push(alivableCards[i]);
        alivableCards.splice(r, 1);
        console.log(alivableCards)
        console.log(pickableCards[r])
        console.log(pickableCards)
    }
    return pickableCards;
}