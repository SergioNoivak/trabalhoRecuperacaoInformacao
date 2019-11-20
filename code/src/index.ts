import {  testeRouter } from './routes/teste/teste';
import { Server } from './server/Server';
import { filesRouter } from './routes/files/files.router';
import { TratamentoKeyword } from './controllers/tratamentoDeErro/metodosDeTratamento/TratamentoLinguagem';
import * as fs from 'fs';

let server:Server = new Server()
server.bootstrap([
        testeRouter,
        filesRouter,

            

]).then(()=> {
    
}).catch(() => {

    
});