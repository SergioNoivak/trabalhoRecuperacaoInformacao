
import * as sulfixos from '../../../artigos/base radical/sulfixo';
export class LimpadorDeDados {
    static removerHifem(valor: string, flag: boolean) {
        valor = valor.replace(/[0-9]/g, '');
        valor = valor.replace(/[`•“”~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
        valor = valor.replace(/[©°]/gi, ' ');
        if (valor == '') {
            return { "texto": "", flag: flag };
        }
        else {
            if (flag) {
                return { "texto": "" + valor.replace(/[`-]/gi, ''), flag: false };
            }
            else {
                return { "texto": " " + valor.replace(/[`-]/gi, ''), flag: flag };
            }
        }
    }

    static tokenizar(linha: string) {
        return linha.split(" ");
    }

    static tratar(token: string, tratamentos: any[]): string {

        for (let i = 0; i < tratamentos.length; i++) {
            token = tratamentos[i].aplicar(token)
        }
        
        return this.radicalizar(this.delimitarMinimoCaracteres(this.removerAcentos(this.extrairPontuacao(token))))
    
    }
    
    static removerAcentos(token: string):string {

        return token.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    }
    static extrairPontuacao(token: string):string {

        return token.replace(/\d+/g, '')
                    .replace(/[`º•“”~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
                    .replace(/[©°]/gi, '')
                    .replace(/[`-]/gi, '')
                    .toLowerCase()

    }
    static delimitarMinimoCaracteres(token: string):string{
        return token.length>3?token:"";
    }

    static radicalizar(token: string):string{
        for (let indiceSulfixo in sulfixos.sulfixos) {
            if(token.endsWith( sulfixos.sulfixos[indiceSulfixo])){
                return token.substr(0,token.length - sulfixos.sulfixos[indiceSulfixo].length)
            }
        }
        return token;
    }    
    


}