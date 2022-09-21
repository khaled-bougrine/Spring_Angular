export class Tissus{
	
		constructor(
	public id :number,
	
		public name:string,
		 public type:string,
		public colore:string,
		public price:number,
		public isnew:boolean,
		public isbestsell:boolean,
		public solde:number,
		public description:string,
		public modele:string,
		public images:any[],
		//public nbserie:string,
		public nbserie:String,
		public  length:number ,
		public fabric:string,
		public idModels:number[],		
		public fournisseur:string


		){}
}