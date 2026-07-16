import fs from "fs";

const buildInfo = {
  version: process.env.GITHUB_SHA || "local",
  buildTime: new Date().toISOString(),
  runner: process.env.RUNNER_OS || "Unknown",
};

fs.writeFileSync(
  "build-info.json",
  JSON.stringify(buildInfo, null, 2)
);

console.log("Build info generated:");
console.log(buildInfo);