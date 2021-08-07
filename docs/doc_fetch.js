window.addEventListener("load", async function () {
    
    
    if (!DOC_NAME) return;

    var target = document.getElementById("target");
    
    var fullPath = `https://raw.githubusercontent.com/BedrockLauncher/BedrockLauncher/master/docs/${DOC_NAME}.md`;
    var doc = await fetch(fullPath);
    var docText = await doc.text();
    
    var markdownConverter = new showdown.Converter();
    var docHtml = markdownConverter.makeHtml(docText);
    
    target.innerHTML = docHtml;
})