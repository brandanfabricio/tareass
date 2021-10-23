const Server = require('./src/models/Servidor');

require('dotenv').config();

const servidor = new Server();
servidor.listen();