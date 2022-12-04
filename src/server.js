const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");

/* var corsOptions = {
  origin: "http://localhost:4200",
}; */

app.use(cors());
app.use(express.json());


app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/history", require("./routes/foodHistory.routes"));
app.use("/api/patient", require("./routes/pacient.routes"));
app.use("/api/treatment", require("./routes/treatment.routes"));
app.use("/api/medic", require("./routes/medic.routes"));
app.use("/api/food", require("./routes/food.routes"));

const PORT = process.env.PORT || 3000;
app.set('port', PORT)


module.exports = app;
module.exports.handler = serverless(app);