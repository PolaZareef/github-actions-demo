const fs = require("fs");

console.log("Building project...");

fs.mkdirSync("dist", { recursive: true });

fs.writeFileSync(
  "dist/index.html",
  `
<!DOCTYPE html>
<html>
<head>
    <title>GitHub Actions Demo</title>
</head>
<body>
    <h1>Hello from GitHub Actions!</h1>
</body>
</html>
`
);

console.log("Build completed!");