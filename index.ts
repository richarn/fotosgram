import Server from "./classes/server";
import { default as mongoose, default as userRoutes } from "./routes/usuario";

const server = new Server();


//rutas de mi app

server.app.use('/user', userRoutes);

//conectar db
mongoose.connect('mongodb://localhost:27017/fotosgram',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }, (err) => {

    if (err) throw err;
    console.log('base de datos online');
  });

//escuchar server

server.start(() => {
  console.log(`Servidor corriendo en puerto ${server.port}`);

});