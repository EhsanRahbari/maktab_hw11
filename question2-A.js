const fs = require("fs");

fs.readFile("./from.txt", "utf-8", (err, data) => {
  if (err) console.log("there was an error!");
  fs.writeFile("./to.txt", data, (err) => {
    if (err) console.log("there was an error writing to file!");
  });
});
