//Rota = conjunto
//Recurso = usuário

//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar alguma informação (Lista, Item)
//POST = Criando uma nova informação
//PUT = Editar alguma informação
//DELETE = Deletar alguma informação

//Query Params: http://localhost:3333/users?search=diego$page=2
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: (Informações maiores e mais complexas)

//Modos de se realizar as querys: Driver nativo, Query builder e ORM
//Driver nativo: Uso do SQLite de forma direta e escrevendo as querys da forma padrão 
//Query builder: Exexmplo de utilização é o Knex e são escritas em JS
//ORM: Para cada tabela no banco existe uma classe no app (objeto), os retornos são instâncias daquela classe/objeto e são escritas em JS

import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express(); //Express é usado como auxílio no momento de requisição e resposta do servidor

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);


app.listen(3333); //Porta padrão localhoast