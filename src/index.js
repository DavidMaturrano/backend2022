require('dotenv').config();
const app = require('./server.js');
const connection = require('./config/database.js');

connection.conectarDB();

app.listen(app.get('port'), () => {
    console.log(`Servidor levantado en el puerto: ${app.get('port')}`);
})

app.get('/', (req, res) => {
    res.send("¿¿¿Funciona???")
  })
  