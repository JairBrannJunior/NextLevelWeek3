import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create); //Criar orfanto
routes.get('/orphanages', OrphanagesController.index); //Listar orfanato
routes.get('/orphanages/:id', OrphanagesController.show); //Listar somente um orfanato

export default routes;