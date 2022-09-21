
import { IdEtLength } from '../models/Model.IdEtLength';
export class Model{
	
	constructor(
	public id :number,
	public pourquoi:string,
		public name:string,
		public colore:string,
		public price:number,
		public isnew:boolean,
		public isbestsell:boolean,
		public solde:number,
		public description:string,
		public couture:string,
		public images:any[],
		//public nbserie:string,
		public composants: IdEtLength[]
		

		){}
}
/*
{"id":6,"name":"tel","description":200,"price":20.3,
"isnew":true,"isbestpricetrue":true,"composants":[12,125],"images":[2,5]
}
*/