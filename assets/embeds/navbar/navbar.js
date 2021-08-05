var embed, background, transitionDuration, expandedHamburgur, logoImg;

var isExpanded = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function expand() {
    background.classList.add("visible");
    expandedHamburgur.classList.add("expanded");
    logoImg.classList.remove("shrink");
    embed.classList.add("expanded");

    isExpanded = true;
}

async function shrink() {
    background.classList.remove("visible");
    expandedHamburgur.classList.remove("expanded");
    logoImg.classList.add("shrink");
    await sleep(transitionDuration * 1000);
    embed.classList.remove("expanded");

    isExpanded = false;
}

window.addEventListener("load", async function () {
    var transitionDurationString = getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-general");
    transitionDuration = Number(transitionDurationString.slice(0, transitionDurationString.length - 1));

    var hamburgur = document.getElementById("hamburger");
    background = document.getElementById("background");
    embed = parent.window.document.getElementById("nav-bar");
    expandedHamburgur = document.getElementById("expanded-hamburgur");
    logoImg = document.getElementById("logo-img");

    hamburgur.addEventListener("click", function () {
        if (isExpanded) {
            shrink();
        } else {
            expand();
        }
    })
    background.addEventListener("click", shrink);
})
