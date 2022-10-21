const fs = require("fs");
const chalk = require("chalk");
const { doesNotThrow } = require("assert");

// Other
global.owner = ["6289661945278"];
global.staff = ["6289661945278"];
global.footer = "GPSG BY GANN";
global.sessionName = "gpsg";
global.prefa = ["", "/", "!", "."]; // "" = no prefix

global.thumb = fs.readFileSync("./assets/image/dignity.jpg");


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
