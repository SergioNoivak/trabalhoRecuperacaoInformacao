import { Router } from '../../server/Router';
import * as express from 'express';
let LeitorDeArquivo = require('../../controllers/LeitorDeArquivos');
import { TratamentoKeyword } from '../../controllers/tratamentoDeErro/metodosDeTratamento/TratamentoLinguagem';
import * as fs from 'fs';


class FileRouter extends Router {

     
    applyRoutes(aplication: any) {
        aplication.get('/linguagens-suportadas', function (req: express.Request, res: express.Response) {
            var files = fs.readdirSync('./C:/Users/sergi/Documents/IF GOIANO/recuperação da informação/trabalho final/code/src/const/keywords/keywords');
            res.status(200);
            res.send({ "data": files })
        });

        aplication.get('/documentos-corpus', function (req: express.Request, res: express.Response) {
            var files = fs.readdirSync('C:/Users/sergi/Documents/IF GOIANO/recuperação da informação/trabalho final/artigos/transformados');
            files = files.filter(file=>file.endsWith('txt'))
            res.status(200);
            res.send({ "data": files })
        });


        aplication.get('/id-processar-tokens',async function (req: express.Request, res: express.Response) {
            var files = fs.readdirSync('C:/Users/sergi/Documents/IF GOIANO/recuperação da informação/trabalho final/artigos');
           files = files.filter(file=>file.endsWith('pdf'))
           let leitor = new LeitorDeArquivo();
           for (let i = 0; i < files.length; i++) {
               console.log("fazendo ",files[i])
           }
            res.status(200);
            res.send({ "data": files })
        });

        aplication.post('/id-processar-tokens',async function (req: express.Request, res: express.Response) {
          
            console.log(req.body['documento']);
            
            res.status(200);
            res.send({ "data": "" })



        });


    }
    }
    



export const filesRouter = new FileRouter()
