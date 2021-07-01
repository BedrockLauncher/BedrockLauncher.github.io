function makeElementFaceCursor(facer) {
    document.documentElement.addEventListener("mousemove", function (event) {
        var elementBox = facer.getBoundingClientRect();
        var rotConstraintXY = [
                window.innerWidth * 2,
                window.innerHeight * 2
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
        var style = `perspective(100px) rotateY(${calmedReletiveXY[0]}deg) rotateX(${calmedReletiveXY[1]}deg)`;
        facer.style.transform = style;
    });
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
