window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const keys = document.querySelectorAll(".keys div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#fa1818",
        "#b83631",
        "#f37b1a",
        "#e9d418",
        "#81e430",
        "#23bd38",
        "#24e7ad",
        "#137e99",
        "#1a36da",
        "#bf28dd",
        "#9b116d",
        "#69112f"
    ];

    // Sound
    keys.forEach((key, index) => {
        key.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            creatBalls(index);
        });
    });

    // Create sound balls
    const creatBalls = index => {
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = "jump 2s ease";
        ball.addEventListener("animationend", function() {
            visual.removeChild();
        });
    };
});
