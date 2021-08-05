var embed, background, transitionDuration, transitionDurationSemiSlow, expandedHamburgur, logoImg, hamburgur, hamburgurIcon;

var isExpanded = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function expand() {
    background.classList.add("visible");
    expandedHamburgur.classList.add("expanded");
    logoImg.classList.remove("shrink");
    hamburgurIcon.classList.add("expanded");
    embed.classList.add("expanded");

    await sleep(transitionDurationSemiSlow * 1000 / 2);
    hamburgurIcon.src = "/assets/images/icons/cancel.svg";

    isExpanded = true;
}

async function shrink() {
    background.classList.remove("visible");
    expandedHamburgur.classList.remove("expanded");
    logoImg.classList.add("shrink");
    hamburgurIcon.classList.remove("expanded");

    await sleep(transitionDurationSemiSlow * 1000 / 2);
    hamburgurIcon.src = "/assets/images/icons/hamburger.svg";

    await sleep(((transitionDurationSemiSlow / 2) - transitionDuration) * 1000);
    embed.classList.remove("expanded");

    isExpanded = false;
}

window.addEventListener("load", async function () {
    var computedStyle = getComputedStyle(document.documentElement)
    var transitionDurationString = computedStyle.getPropertyValue("--transition-duration-general");
    var transitionDurationSemiSlowString = computedStyle.getPropertyValue("--transition-duration-semi-slow");
    transitionDuration = Number(transitionDurationString.slice(0, transitionDurationString.length - 1));
    transitionDurationSemiSlow = Number(transitionDurationSemiSlowString.slice(0, transitionDurationSemiSlowString.length - 1));

    hamburgur = document.getElementById("hamburger");
    hamburgurIcon = document.getElementById("hamburger-icon");
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
