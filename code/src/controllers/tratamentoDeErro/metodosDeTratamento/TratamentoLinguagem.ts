import { TratamentoDeErro } from '../MetodoDeTratamento';
export class TratamentoKeyword extends TratamentoDeErro{
     validador = <any>{};
    aplicar(token:string):string{

        try{
            let retorno = this.validador[token]?"":token;
            return retorno;

        }catch(e){
            return token;

        }
    }    
    constructor(linguagem:string){  
        super(); 
        try{
            this.validador=require('C:/Users/sergi/Documents/IF GOIANO/recuperação da informação/trabalho final/code/src/const/keywords/keywords/'+linguagem+'.json')
        }catch(e){
            this.validador = {};

        }
    
        }

}