import express from "express";
import axios from "axios";

const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const datas = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(datas);
    res.render("index.ejs", {
      data: datas["data"]["message"],
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log("Running on 8000");
});
