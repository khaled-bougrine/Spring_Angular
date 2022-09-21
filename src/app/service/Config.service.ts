import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigTiss } from '../models/Model.ConfigTiss';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class  ConfigService{

	  constructor(private httpClient: HttpClient) { 
	  
            //this.storage.set('prename', 'bougrine');
	  }

	//---listdeModeldetissus-------------------
	modelTissue={cotton:['stain','plaid'],voile:['flower','stain'],organza:[],satin:[],silk:[],linen:[],plush:[]


	}
	ColoreTissue={cotton:['AliceBlue','AntiqueWhite','DarkMagenta','#ff0000','#000000'],voile:['Brown','BlanchedAlmond'],organza:[],satin:[],silk:[],linen:[],plush:[]


	}

	getConfigTiss(id):Observable<ConfigTiss>{
		return this.httpClient.get<ConfigTiss>('http://localhost:8080/getConfigTiss/'+id)
	}

	putmodelTissus(configTiss:ConfigTiss){

		 this.httpClient.put('http://localhost:8080/updateConfigTiss/',configTiss).subscribe(res=>{
		 			console.log('test')
		 })
		/*	if(name=='cotton')
	         this.modelTissue.cotton.push(t)
	    else if(name=='voile')
	         this.modelTissue.voile.push(t)
	        else if(name=='organza')
	         this.modelTissue.organza.push(t)
         else if(name=='satin')
	         this.modelTissue.satin.push(t)
         else if(name=='silk')
	         this.modelTissue.silk.push(t)
        else if(name=='linen')
	         this.modelTissue.linen.push(t)
         else if(name=='plush')
	         this.modelTissue.plush.push(t)
	     */

	}
	addColoreTissus(name,t){
		if(name=='cotton')
	        return this.ColoreTissue.cotton.push(t)
	    else if(name=='voile')
	         this.ColoreTissue.voile.push(t)
	        else if(name=='organza')
	         this.ColoreTissue.organza.push(t)
         else if(name=='satin')
	         this.ColoreTissue.satin.push(t)
         else if(name=='silk')
	         this.ColoreTissue.silk.push(t)
        else if(name=='linen')
	         this.modelTissue.linen.push(t)
         else if(name=='plush')
	         this.modelTissue.plush.push(t)

	}
	getmodelTissus(name:string){
		if(name=='cotton')
	        return this.modelTissue.cotton
	    else if(name=='voile')
	        return this.modelTissue.voile
	        else if(name=='organza')
	        return this.modelTissue.organza
         else if(name=='satin')
	        return this.modelTissue.satin
         else if(name=='silk')
	        return this.modelTissue.silk
        else if(name=='linen')
	        return this.modelTissue.linen
         else if(name=='plush')
	        return this.modelTissue.plush


	}
	getColoreTissus(name:string){
		if(name=='cotton')
	        return this.ColoreTissue.cotton
	    else if(name=='voile')
	        return this.ColoreTissue.voile
	        else if(name=='organza')
	        return this.ColoreTissue.organza
         else if(name=='satin')
	        return this.ColoreTissue.satin
         else if(name=='silk')
	        return this.ColoreTissue.silk
        else if(name=='linen')
	        return this.modelTissue.linen
         else if(name=='plush')
	        return this.modelTissue.plush


	}



	//'plaid','stripte'
	


	



	//-----------listdeFabricDeTissus------------
	fabricList:String[]=[
	'cotton','voile','organza','satin','silk','plush','linen'
	];
	//-----------listdetypedecomposant
	typeComposant:String[]=['embrasses','poteaux','frange','mercerie'];
	pour:String[]=['fenetre','salon',"Chambre d'enfant",'chambre']


	
}