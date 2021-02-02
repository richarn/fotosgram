import Server from "./classes/server";

const server = new Server();


//escuchar server

server.start(() => {
  console.log(`Servidor corriendo en puerto ${ server.port }`);
  
});