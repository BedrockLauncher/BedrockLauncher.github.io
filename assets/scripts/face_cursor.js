function makeElementFaceCursor(facer) {
    var defaultTransform = facer.style.transform;
    var defaultTransitionDuration = facer.style.transitionDuration;

    function face(event) {
        var elementBox = facer.getBoundingClientRect();
        var scale = 1.05;
        var rotConstraintXY = [
                window.innerWidth * 1,
                window.innerHeight * 1
            ];
        var mouseXY = [
                event.clientX,
                event.clientY
            ];
        var centerXY = [
                (elementBox.left + elementBox.right) / 2,
                (elementBox.top + elementBox.bottom) / 2
            ];
        var reletiveXY = [
                mouseXY[0] - centerXY[0],
                mouseXY[1] - centerXY[1]
            ];
        var calmedReletiveXY = [
                reletiveXY[0] / rotConstraintXY[0],
                reletiveXY[1] / rotConstraintXY[1] * -1
            ];
        var style = `perspective(100px) rotateY(${calmedReletiveXY[0]}deg) rotateX(${calmedReletiveXY[1]}deg) scale(${scale})`;
        facer.style.transform = style;
    }

    facer.addEventListener("mouseenter", function () {
        document.documentElement.addEventListener("mousemove", face);

        setTimeout(function () {
            facer.style.transitionDuration = "unset";
        }, 200);
    })

    facer.addEventListener("mouseout", function () {
        document.documentElement.removeEventListener("mousemove", face);
        facer.style.transitionDuration = defaultTransitionDuration;
        facer.style.transform = defaultTransform;
    })
}

window.addEventListener("load", function () {
    var facers = document.getElementsByClassName("face-cursor");
    var facerIndex = 0;
    while (facerIndex < facers.length) {
        var facer = facers[facerIndex];
        makeElementFaceCursor(facer);

        facerIndex++;
    }
})
