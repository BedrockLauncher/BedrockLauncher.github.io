window.addEventListener("load", async function () {
    var contributors = await fetch("https://api.github.com/repos/BedrockLauncher/BedrockLauncher/contributors?per_page=2147483647");
    var contributorsJson = await contributors.json();

    var githubContributors = document.getElementById("github-contributors");
    var alreadyIndexedIds = [
        18092668,
        47992209,
        5191659,
        14214667,
        49699333,
        43380238
    ];

    for (contributorIndex in contributorsJson) {
        contributor = contributorsJson[contributorIndex];
        if (!alreadyIndexedIds.includes(contributor.id)) {
            var a = document.createElement("a");
            var img = document.createElement("img");
            var p = document.createElement("p");
            
            a.href = contributor.html_url;
            a.target = "_blank";
            
            img.src = contributor.avatar_url + "&size=80";
            
            p.innerText = contributor.login;
            
            a.appendChild(img);
            a.appendChild(p);
            
            githubContributors.appendChild(a);
        }
    }
});