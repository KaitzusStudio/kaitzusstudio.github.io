window.addEventListener("DOMContentLoaded", () => {
    const musicPlayer = document.getElementById("background-music");
    const muteButton = document.getElementById("mute-button");

    // Hae mykistysasetus localStoragesta
    const isMuted = localStorage.getItem("isMuted") === "true";
    musicPlayer.muted = isMuted;
    muteButton.textContent = isMuted ? "Unmute" : "Mute";

    // Lisää napin toiminta mykistykselle
    muteButton.addEventListener("click", () => {
        musicPlayer.muted = !musicPlayer.muted;
        localStorage.setItem("isMuted", musicPlayer.muted);
        muteButton.textContent = musicPlayer.muted ? "Unmute" : "Mute";
    });
});
