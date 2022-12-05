require('dotenv').config();
const connection = require('./config/database.js');
const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");

connection.conectarDB();

app.use(cors());
app.use(express.json());

app.use("/.netlify/functions/api/auth", require("./routes/auth.routes"));
app.use("/.netlify/functions/api/history", require("./routes/foodHistory.routes"));
app.use("/.netlify/functions/api/patient", require("./routes/pacient.routes"));
app.use("/.netlify/functions/api/treatment", require("./routes/treatment.routes"));
app.use("/.netlify/functions/api/medic", require("./routes/medic.routes"));
app.use("/.netlify/functions/api/food", require("./routes/food.routes"));

const PORT = process.env.PORT || 3000;
app.set('port', PORT)

app.listen(app.get('port'), () => {
    console.log(`Servidor levantado en el puerto: ${app.get('port')}`);
})

app.get('/.netlify/functions/api/', (req, res) => {
    res.send("¿¿¿Funciona???")
  })


module.exports = app;
module.exports.handler = serverless(app);