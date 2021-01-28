const fs = require("fs");

fs.readFile("./from.txt", "utf-8", (err, data) => {
  if (err) console.log("there was an error!");
  fs.readFile("./append.txt", "utf-8", (err1, data1) => {
    if (err1) console.log("there was an error!");
    fs.writeFile("./to.txt", data +"\n"+ data1, (err) => {
        if (err) console.log("there was an error writing to file!");
      });
  })
});
