// declraing vars and data structures we need
const fs = require("fs");
let tempnameObj = {};
let tempnumObj = {};
let names = [];
let numbers = [];
// reading from name.txt and form the data in an object
fs.readFile("names.txt", "utf-8", (err, data) => {
  if (err) console.log("there was an error");
  for (const itter of data.split("\n")) {
    tempnameObj["uid"] = itter.split("-")[0];
    tempnameObj["name"] = itter.split("-")[1];
    names.push(tempnameObj);
    tempnameObj = {};
  }
  // reading from numbers.txt and form the data in an object
  fs.readFile("numbers.txt", "utf-8", (err, data) => {
    if (err) console.log("there was an error");
    for (const itter of data.split("\n")) {
      tempnumObj["uid"] = itter.split("-")[0];
      tempnumObj["num"] = itter.split("-")[1];
      numbers.push(tempnumObj);
      tempnumObj = {};
    }
    //constructing the informing string.

    for (const temp of names) {
      let tempo = "";
      let numstring = "";
      let resultStr = "";
      let numOfNums = numbers.filter((item) => item.uid === temp.uid);
      //   console.log(numOfNums);
      if (numOfNums.length) {
        if (numOfNums.length > 1) {
          tempo = temp.name.trim() + "'s phone numbers are : ";
          for (const nums of numOfNums) {
            numstring += nums.num.trim() + ",";
          }
        } else {
          tempo = temp.name.trim() + "'s phone number is : ";
          numstring = numOfNums[0].num.trim();
        }
      } else {
        tempo = temp.name.trim() + " hasn't have any phone number!";
      }
      resultStr = tempo + numstring + "\n";
      //finally logging to a file
     fs.writeFileSync("./log.txt" , resultStr , {flag:'a'});
    }
  });
});
