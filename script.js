let musicPlaying = false;

function openBirthday() {

    const opening = document.getElementById("opening");
    const birthday = document.getElementById("birthday");
    const music = document.getElementById("music");

    opening.style.display = "none";
    birthday.style.display = "block";

    music.play().then(() => {
        musicPlaying = true;
        document.getElementById("musicButton").innerHTML = "🔊";
    }).catch(() => {
        console.log("Musik belum bisa dimainkan otomatis.");
    });

    createConfetti();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function toggleMusic() {

    const music = document.getElementById("music");
    const button = document.getElementById("musicButton");

    if (musicPlaying) {

        music.pause();
        musicPlaying = false;
        button.innerHTML = "🔇";

    } else {

        music.play();
        musicPlaying = true;
        button.innerHTML = "🔊";

    }
}


function createConfetti() {

    const container = document.getElementById("confetti");

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        const size = Math.random() * 8 + 6;

        confetti.style.width = size + "px";
        confetti.style.height = size * 1.5 + "px";

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}