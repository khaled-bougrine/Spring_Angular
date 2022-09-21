import { Model } from 'models/Model.model';
export class Objet{
	
	constructor(
		public name:string,
		public numerodeserie:number,
		public colore:string,
		public price:number,
		public images:any[],
		public isnew:boolean,
		public bestsell:boolean,
		public solde:number,
		public models:Model[]
		){}
}