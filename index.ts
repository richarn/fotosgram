import Server from "./classes/server";
import userRoutes from "./routes/usuario";
import bodyParser  from "body-parser";


const mongoose = require('mongoose');
const server = new Server();

//body parser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

//rutas de mi app

server.app.use('/user', userRoutes);

//conectar db
mongoose.connect('mongodb://localhost:27017/fotosgram', {
    useNewUrlParser: true,
    useCreateIndex: true,
  }, (err: any) => {

    if (err) throw err;
    console.log('base de datos online');
  });

//escuchar server

server.start(() => {
  console.log(`Servidor corriendo en puerto ${server.port}`);

});