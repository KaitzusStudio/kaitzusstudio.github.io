document.addEventListener("DOMContentLoaded", function() {
    const tracks = document.querySelectorAll(".track");
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");

    tracks.forEach(track => {
        track.addEventListener("click", function() {
            const audioFile = this.getAttribute("data-audio");
            audioSource.src = audioFile; // Asetetaan musiikkitiedoston polku
            audioPlayer.load(); // Ladataan uusi kappale
            audioPlayer.play(); // Soitetaan kappale
        });
    });
});
