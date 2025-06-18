//Isabela Teck game
// should be an dice game
function playDiceGame() {
    let total = 0; // total set to 0 first (logic error)
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // LOGIC ERROR: Using the old total (still 0)
    let result = `You rolled a ${die1} and a ${die2}. Total: ${total}. `;

    if (total >= 10) {
        result += "You win!";
    } else {
        result += "Try again!";
    }

    document.getElementById('gameResult').textContent = result;
}
