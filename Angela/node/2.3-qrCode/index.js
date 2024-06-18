// inquirer.js | qr-image

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type your URL :",
      name: "url",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const qr_img = qr.image(answers.url, { type: "png" });
    qr_img.pipe(fs.createWriteStream("myQr.png"));

    fs.writeFile("urls.txt", answers.url, () => {
      console.log("File added");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
