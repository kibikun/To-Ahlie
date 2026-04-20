
const container = document.querySelector(".container");
const texts = document.querySelectorAll(".text-1");
let index = 0;
let timeoutId;
let isPaused = false;

// set initial height
container.style.height = texts[0].offsetHeight + "px";

function showNextText() {
    if (isPaused) return;
    if (index === texts.length - 1) return;
    const current = texts[index];
    current.classList.remove("active");

    index++;

    if (index < texts.length) {
        const next = texts[index];

        // update height BEFORE showing
        container.style.height = next.offsetHeight + "px";

        next.classList.add("active");

        if (index < texts.length - 1) {
            setTimeout(showNextText, 5000);
        }
    }
}

setTimeout(showNextText, 5000);


const music = document.getElementById("bg-music");

function startMusic() {
    music.volume = 0;
    music.play();

    let volume = 0;
    const targetVolume = 0.3; // adjust as you like

    const fadeIn = setInterval(() => {
        if (volume < targetVolume) {
            volume += 0.01;
            music.volume = volume;
        } else {
            clearInterval(fadeIn);
        }
    }, 50);

    // remove listeners after first interaction
    document.removeEventListener("click", startMusic);
    document.removeEventListener("scroll", startMusic);
    document.removeEventListener("keydown", startMusic);
}

// trigger on first interaction
["click", "scroll", "keydown"].forEach(event =>
    document.addEventListener(event, startMusic)
);