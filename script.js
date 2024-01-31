document.addEventListener("DOMContentLoaded", function() {
    // Sample data (replace with your own)
    const groups = [
        { name: "The Ohio Supermodels", score: 185 },
        { name: "The Titanic Swim Team", score: 267 },
        { name: "Th3 Muskateers", score: 37 },
        { name: "The Dum-Dums", score: 318 },
    ];

    const scoreboard = document.getElementById("scoreboard");

    // Populate scoreboard
    groups.forEach(group => {
        const card = document.createElement("div");
        card.classList.add("group-card");

        const name = document.createElement("div");
        name.classList.add("group-name");
        name.textContent = group.name;

        const score = document.createElement("div");
        score.classList.add("group-score");
        score.textContent = group.score;

        const button = document.createElement("button");
        button.textContent = "Coin UP";
        button.addEventListener("click", function() {
            group.score += 1; // Increase the score by 1 (adjust as needed)
            score.textContent = group.score;
            const decreaseButton = createButton("Decrease Score", () => updateScore(group, -10));

     
        });

        card.appendChild(name);
        card.appendChild(score);
        card.appendChild(button);

        scoreboard.appendChild(card);
    });
});