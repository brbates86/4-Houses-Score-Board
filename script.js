document.addEventListener("DOMContentLoaded", function() {
    // Sample data (replace with your own)
    const groups = [
        { name: "Team 1", score: 260 },
        { name: "Team 2", score: 119 },
        { name: "Team 3", score: 362 },
        { name: "Team 4", score: 296 },
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
        button.textContent = "UP";
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