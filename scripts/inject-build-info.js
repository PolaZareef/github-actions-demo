import fs from "fs";

const buildInfo = JSON.parse(
  fs.readFileSync("build-info.json", "utf8")
);

let html = fs.readFileSync("index.html", "utf8");

html = html.replace("__VERSION__", buildInfo.version);
html = html.replace("__BUILD_TIME__", buildInfo.buildTime);

fs.writeFileSync("index.html", html);

console.log("Injected build info.");