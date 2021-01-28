const fs = require("fs");
const fromData = fs.readFileSync("./from.txt", { encoding: "utf8", flag: "r" });
const appendData = fs.readFileSync("./append.txt", {
  encoding: "utf8",
  flag: "r",
});
fs.writeFileSync("./to.txt", fromData + "\n" + appendData);
