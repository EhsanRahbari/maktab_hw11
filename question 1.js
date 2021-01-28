const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name ? ", function (name) {
  rl.question("what is your last name ? ", function (lastName) {
    console.log(`result ===> ${name} + ${lastName}`);
    rl.close();
  });
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
