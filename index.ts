import Server from "./classes/server";
import userRoutes from "./routes/usuario";

const server = new Server();


//rutas de mi app

server.app.use('/user', userRoutes);

//escuchar server

server.start(() => {
  console.log(`Servidor corriendo en puerto ${ server.port }`);
  
});