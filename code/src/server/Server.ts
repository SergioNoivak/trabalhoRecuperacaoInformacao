let express = require("express");
let cors = require("cors");
import { Router } from './Router';

export class Server {
    aplication: any;
    
    bootstrap(routers: Router[] = []): any {
        
        this.aplication = express()
        process.setMaxListeners(0)

        this.aplication.use(cors());
        this.aplication.options('*', cors());       

        var bodyParser = require('body-parser')
        this.aplication.use( bodyParser.json() );       // to support JSON-encoded bodies
        this.aplication.use(bodyParser.urlencoded({     // to support URL-encoded bodies
          extended: true
        })); 
        return this.initRoutes(routers).then(() => this);
    }

    initRoutes(routers: Router[] = []): Promise<any> {

            return new Promise((resolver, reject) => {
            try {
                 routers.forEach(route => route.applyRoutes(this.aplication));
                 this.aplication.listen(3001, function () {
                    console.log('Example app listening on port 3001!');
                  });   
            } catch (error) {
                reject(error);
            }
        });
    }

}