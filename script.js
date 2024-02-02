document.addEventListener("DOMContentLoaded", function() {
    // Data for the teams and scores
    const groups = [
        { name: "Team 1", score: 250 },
        { name: "Team 2", score: 99 },
        { name: "Team 3", score: 457 },
        { name: "Team 4", score: 366 },
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