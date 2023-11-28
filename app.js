document.getElementById("startGameButton").addEventListener("click", function(){
    const x = document.getElementById("dimensionX").value;
    const y = document.getElementById("dimensionY").value;
    cards = GenerateCards(x,y);
    
    Render(cards, x, y);
})

// Test
function hasThreeOccurrences(arr) {
    // Create an object to store the count of each element
    const countMap = {};

    // Iterate through the array
    for (const item of arr) {
        // Increment the count for each element in the countMap
        countMap[item] = (countMap[item] || 0) + 1;

        // Check if the count is 3
        if (countMap[item] === 3) {
            return true;
        }
    }

    // If no element has three occurrences, return false
    return false;
}