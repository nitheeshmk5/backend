import fs from "fs";

// const fileData = async () => {
//   try {
//     const data = await fs.readFile("./sample.txt", "utf8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

const data = fs.readFileSync("./sample.txt", "utf-8");
console.log(data);
console.log("Nitheesh 1");
