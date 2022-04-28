const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./utils/db");

const app = express();

app.use(express.static("public"));

// const fn_done = function (rows) {
//   console.log(rows);
// };

// const fn_fail = function (error) {
//   console.log(error);
// };

// db.load("SELECT * FROM categories", fn_done, fn_fail);

/* Callback */
// db.load(
//   "SELECT * FROM categories",
//   function (rows) {
//     for (const pro of rows) {
//       console.log(`${pro.CatID}=> ${pro.CatName}`);
//     }
//   },
//   function (error) {
//     console.log(error.sqlMessage);
//   }
// );

/* PROMISE thuần túy*/

// const pm = db.load("SELECT * FROM categories");
// pm.then((rows) => {
//   console.log(rows);
// }).catch((err) => {
//   console.log(error);
// });

/* ASYNC AWAIT */
async function main() {
  const rows = await db.load("SELECT * FROM categories");
  console.log(rows);
}

main();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

// app.get("/test", function (req, res) {
//   res.render("test");
// });

app.get("/bs", function (req, res) {
  res.sendFile(__dirname + "/bs.html   ");
});

// const categoryRouter = require("./routes/category.route");
// app.use("/admin/categories", categoryRouter);
app.use("/admin/categories", require("./routes/category.route"));

app.listen(3000, (req, res) => {
  console.log("Server is running");
});
