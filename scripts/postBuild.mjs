import { copyFileSync } from "fs";

const BUILD_DIR = "build";

console.log("Copying index.html to 404.html");
copyFileSync(`./${BUILD_DIR}/index.html`, `./${BUILD_DIR}/404.html`);
