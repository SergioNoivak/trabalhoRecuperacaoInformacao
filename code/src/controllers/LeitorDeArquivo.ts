import { LimpadorDeDados } from './LimpadorDados';
import * as fs from 'fs';



export class LeitorDeArquivo {


        async tatarTXT(diretorioArquivo: string, tratamentos: any[], diretorioDeSalvamento: string) {
                let umavez = true;
                return new Promise((resolve, reject) => {
                        let tabelaFrequencia = <any>{};
                        var LineByLineReader = require('line-by-line'),
                                lr = new LineByLineReader(diretorioArquivo);

                        lr.on('line', function (line: string) {
                                let string: string = "";
                                let tokens = line.split(" ")
                                tokens.forEach(token => {
                                        if (token != " " && token != "" && token.replace(/ /g, '') != '') {
                                                let newToken = (LimpadorDeDados.tratar(token, tratamentos)).replace(/ /g, '')
                                                if (newToken != "") {
                                                        if (tabelaFrequencia[newToken] == undefined)
                                                                tabelaFrequencia[newToken] = 1;
                                                        else
                                                                tabelaFrequencia[newToken]++;
                                                }

                                                string += " " + newToken

                                        }

                                })
                                if (string.replace(/ /g, '') != '')
                                        fs.appendFileSync(diretorioDeSalvamento + ".txt", string + "\n");
                                // console.log(tabelaFrequencia)


                        });

                        lr.on('end', function () {
                                if(umavez){

                                        fs.appendFileSync(diretorioDeSalvamento + ".txt.json", JSON.stringify(tabelaFrequencia));
                                        umavez = false;
                                }
                                console.log("FIME#")
                                resolve()

                        });


                })


        }
        constructor() {


        }

}