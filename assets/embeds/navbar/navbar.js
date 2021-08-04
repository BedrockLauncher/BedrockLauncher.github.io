var embed, background, transitionDuration;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function expand() {
    background.classList.add("visible");
    embed.classList.add("expanded");
}

async function shrink() {
    background.classList.remove("visible");
    await sleep(transitionDuration * 1000);
    embed.classList.remove("expanded");
}

window.addEventListener("load", async function () {
    var transitionDurationString = getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-general");
    transitionDuration = Number(transitionDurationString.slice(0, transitionDurationString.length - 1));

    var hamburgur = document.getElementById("hamburger");
    background = document.getElementById("background");
    embed = parent.window.document.getElementById("nav-bar");

    var isExpanded = false;

    hamburgur.addEventListener("click", function () {
        if (isExpanded) {
            shrink();
        } else {
            expand();
        }

        isExpanded = !isExpanded;
    })
})
