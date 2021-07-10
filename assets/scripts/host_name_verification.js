// wrapped in a function to avoid whitelist manipulation
function hostNameVerification () {
    var whiteList = [
        "127.0.0.1", // local host for testing
        "bedrocklauncher.github.io"
    ];
    if (!whiteList.includes(window.top.location.hostname)) {
        window.location = "/no_cross_reference.html";
    }
}

hostNameVerification();