import { Router, Request, Response, request } from "express";
import { Usuario } from "../models/usuario.model";
import bcrypt from 'bcrypt';
const userRoutes = Router();

// userRoutes.get('/prueba', (req: Request, res: Response) => {
    
//   res.json({
//     ok: true,
//     mensaje: 'Todo funciona bien!'
//   })
    
// });

//login

userRoutes.post('/login', (req: Request, res: Response) => {

  const body = req.body;

  Usuario.findOne({ email: body.email }, (err: any, userDB: any) => {
  
    if (err) throw err;

    if (!userDB) {
      return res.json({
        ok: false,
        mensaje: 'Usuario/contrasena no son correctas'
      });
    }
    
    if (userDB.compararPassword(body.password)) {
        
          res.json({
              ok: true,
              token: "ASDJASDHAUSHDAHSD"
          });
    } else {
        res.json({
            ok: false,
            token: "Usuario/contrasena no son correctos**"
        });
    }

  });

});

//crear un usuario
userRoutes.post('/create', (req: Request, res: Response) => {
    
  
  const user = {
    nombre: req.body.nombre,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    avatar: req.body.avatar
  };

  Usuario.create(user).then(userDB => {
    
    res.json({
      ok: true,
      user: userDB
    });

  }).catch( err => {
    res.json({
      ok: false,
      err
    });
  });

    
});
export default userRoutes;