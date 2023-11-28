var activetedCards = [];

function Active(cards, element) {
  if (activetedCards.length == 2) {
    return;
  }

  Felforditas(cards, element);

  activetedCards.push(element);

  sleep(1600).then(() => {  //Megvarjuk hogy a kartyak felforduljanak
    if (activetedCards.length == 2) { //Egyszerre 2 kartya fel van forditva
      if (CheckMatching(cards)) {
        grid = document.getElementById("cardsContainer");

        Array.from(activetedCards).forEach(function (cardElement) {
          grid.removeChild(cardElement);  //Kartyak torlese
        });
      } else {
        Array.from(activetedCards).forEach(function (cardElement) {
          cardElement.classList.toggle("active"); //Kartyak visszaforditasa
        });
      }
      activetedCards = [];
    }
  });
}

function CheckMatching(cards) {
  let card1ID = activetedCards[0].id;
  let card2ID = activetedCards[1].id;

  if (cards[card1ID] == cards[card2ID]) {
    return true;
  } else {
    return false;
  }
}

function Felforditas(cards, element){
  element.classList.toggle("active");

  id = element.id;
  console.log("content" + id);
  document.getElementById("content" + id).innerText = cards[id];
}
