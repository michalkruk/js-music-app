window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const keys = document.querySelectorAll(".keys div");

    // Sound
    keys.forEach((key, index) => {
        key.addEventListener("click", function() {
            sounds[index].play();
        });
    });
});
