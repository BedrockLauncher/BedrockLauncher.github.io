var module = {};

function serve(url) {
    try {
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    } catch (error) {
        console.warn(`failed to load script ${url}\nerror:\n${error}`);
    }
}

const toServeScripts = [
    // internal scripts
    "/assets/scripts/banner_switching.js",
    "/assets/scripts/no-js-hiders.js",
    "/assets/scripts/side_scroller.js",

    // external scripts
    "https://unpkg.com/showdown/dist/showdown.min.js",
    "https://unpkg.com/fuse.js/dist/fuse.js"
]

for (var scriptIndex in toServeScripts) {
    serve(toServeScripts[scriptIndex]);
}
