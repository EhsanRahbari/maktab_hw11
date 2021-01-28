const fs = require("fs");

const path = "./test.txt";

fs.writeFile(path, "", (err) => {
  if (err) console.log("there was an error creating the file");
  if (fs.existsSync(path)) {
    console.log("The file exists.");
  }
});
