window.addEventListener("load", async function () {
    var versionContainer = document.getElementById("version-container");

    var releasesFetch = await fetch("https://api.github.com/repos/BedrockLauncher/BedrockLauncher-Beta/releases");
    var releasesJson = await releasesFetch.json();
    
    for (var releaseIndex in releasesJson) {
        var release = releasesJson[releaseIndex];
        var showDown = new showdown.Converter();
        var bodyMD = release.body;
        var title = release.name;
        var bodyHTML = showDown.makeHtml(bodyMD);
        var detailsElement = document.createElement("details");
        var brElement = document.createElement("br");
        var summaryElement = document.createElement("summary");
        var bodyContainer = document.createElement("div");
        
        summaryElement.innerText = title;
        
        bodyContainer.innerHTML = bodyHTML;
        
        detailsElement.classList.add("hidden-ans");
        detailsElement.appendChild(summaryElement);
        detailsElement.appendChild(bodyContainer);
        
        versionContainer.appendChild(detailsElement);
        versionContainer.appendChild(brElement);
    }
})
