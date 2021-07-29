window.addEventListener("load", async function () {
    var lisence = await fetch("https://raw.githubusercontent.com/BedrockLauncher/BedrockLauncher/master/LICENSE.txt");
    var lisenceText = await lisence.text();

    var target = document.getElementById("target");

    convertor = new showdown.Converter({
        omitExtraWLInCodeBlocks: true
    });
    target.innerHTML = convertor.makeHtml(lisenceText)
});