const fs = require("fs");
const data = fs.readFileSync("./from.txt", { encoding: "utf8", flag: "r" });
fs.writeFileSync("./to.txt", data);
