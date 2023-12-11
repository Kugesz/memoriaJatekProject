function IsTheGameWon(){
    cardsContainer = document.getElementById("cardsContainer")
    if(cardsContainer.childElementCount == 0){
        document.getElementById("winMenu").style.display = "flex";
        document.getElementById("overlay").style.display = "block";
    }
}