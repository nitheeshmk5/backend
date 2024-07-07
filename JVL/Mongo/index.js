import express from "express";
import bodyParser from "body-parser";
import exhbs from "express-handlebars";
import getDatabase from "./db";

const app = express();

app.engine(
  "hbs",
  exhbs.engine({ layoutsDir: "views/", defaultLayout: "main", extname: "hbs" })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", async (req, res) => {
  let msg = "Test";
  let database = await getDatabase();
  res.render("main", { msg });
});

app.listen(8000, () => {
  console.log("ON on 8000");
});
