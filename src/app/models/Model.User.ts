import { Favorite } from '../models/Model.Favorite';
import { Collection } from '../models/Model.Collection';
import { CommandePaiee } from '../models/Model.CommandePaiee';
import { ComTissus } from '../models/Model.ComTissus';




export class User{
	
	constructor(public id:number,
		public name:string,
		public prename:string,
		public mail:string,
		public password:string,
		public etat:string,
		public codePostale:string,

		public addresse:string,
		public telephone:string,
		
		public favorits:Favorite[],
		public collection:Collection[] ,
		public collectionPaiee:CommandePaiee[] ,
		public comTissus:ComTissus[]

		
		){}
}
