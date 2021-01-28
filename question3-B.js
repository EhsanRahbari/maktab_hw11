const fs = require("fs");
const path = "./test.txt";

fs.writeFileSync(path, "");
if (fs.existsSync(path)) {
  console.log("file has been created");
} else {
  console.log("there was an error");
}
