window.addEventListener("load", function () {
    var hamburgur = document.getElementById("hamburger");
    var embed = parent.window.document.getElementById("nav-bar");

    var isExpanded = false;

    function expand() {
        embed.classList.add("expanded");
    }

    function shrink() {
        embed.classList.remove("expanded");
    }

    hamburgur.addEventListener("click", function () {
        if (isExpanded) {
            shrink();
        } else {
            expand();
        }

        isExpanded = !isExpanded;
    })
})
