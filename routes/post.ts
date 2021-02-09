import { Router } from "express";
import { verificaToken } from "../middlewares/autenticacion";
import { Post } from "../models/post.model";




const postRouts = Router();


postRouts.post('/', [verificaToken], (req: any, res: any) => {
  
  const body = req.body;

  body.usuario = req.usuario._id;

  Post.create( body ).then( postDB => {

    res.json({
      ok: true,
      post: postDB
    });

  }).catch(err => {
    res.json(err)
  });



}); 




export default postRouts;