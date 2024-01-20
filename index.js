const express = require("express");
const app = express();

// body parser
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.raw({ limit: "10mb" }));
app.use(express.text({ limit: "10mb" }));

// Routes
app.use("/", require("./routes"));
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));
app.use("/statistics", require("./routes/statistics"));

// server
const listener = app.listen(3000, async () => {
  const isSeeding = process.argv[2];
  if (isSeeding == "--start-seed") {
    await require("./seeds")();
    return;
  } else if (isSeeding == "--migrations") {
    await require("./pg/migrations").last();
    return;
  }
  console.log(`Server Listening ${listener.address().port} Port!`);
  require("./pg")
    .connect()
    .then((res) => console.log("Database running 5432 port!"));
});
