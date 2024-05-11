// code i didnt use but i want to keep it for future reference

// Add a button to load the next quiz
const nextButton = document.createElement("button");
nextButton.textContent = "Next Doggo";
nextButton.addEventListener("click", async () => {
    const [imgUrl, correctAnswer, choices] = await loadQuizData();
    renderQuiz(imgUrl, correctAnswer, choices);
    options.replaceChildren(nextButton);
});
options.appendChild(nextButton);

// Add a button to reset the quiz
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Quiz";
resetButton.addEventListener("click", () => {
    options.replaceChildren(nextButton);
    nextButton.click();
});
options.appendChild(resetButton);

// Add a button to show the score
const scoreButton = document.createElement("button");
scoreButton.textContent = "Show Score";
scoreButton.addEventListener("click", () => {
    const correctButtons = document.querySelectorAll(".correct");
    const incorrectButtons = document.querySelectorAll(".incorrect");
    const score = document.getElementById("score");
    score.textContent = `Score: ${correctButtons.length} / ${correctButtons.length + incorrectButtons.length}`;
    score.classList.remove("hidden");
});
options.appendChild(scoreButton);

// Add a button to hide the score
const hideButton = document.createElement("button");
hideButton.textContent = "Hide Score";
hideButton.addEventListener("click", () => {
    document.getElementById("score").classList.add("hidden");
});
options.appendChild(hideButton);

// Add a div to display the score
const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
scoreDiv.classList.add("hidden");
options.appendChild(scoreDiv);

// Add a div to display the explanation
const explanationDiv = document.createElement("div");
explanationDiv.id = "explanation";
options.appendChild(explanationDiv);

// Add a button to show the explanation
const explanationButton = document.createElement("button");
explanationButton.textContent = "Show Explanation";
explanationButton.addEventListener("click", () => {
    explanationDiv.textContent = `The correct answer is: ${correctAnswer}`;
    explanationDiv.classList.remove("hidden");
});
options.appendChild(explanationButton );

// Add a button to hide the explanation
const hideExplanationButton = document.createElement("button"); 
hideExplanationButton.textContent = "Hide Explanation";
hideExplanationButton.addEventListener("click", () => {
    explanationDiv.classList.add("hidden");
});

options.appendChild(hideExplanationButton);