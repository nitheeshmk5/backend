const fs = require("fs");

// fs.writeFile("message.txt", "Hi from Node!", (err) => {
//   if (err) throw err;
//   console.log("File written");
// });

fs.readFile("./message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
