import { Component, OnInit ,Input} from '@angular/core';
import { Collection } from '../models/Model.Collection';
import { CommandePaiee } from '../models/Model.CommandePaiee';


import { Model } from '../models/Model.model';
import {ModelService} from '../service/Model.service';



@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
	@Input() collection:Collection;
	model:any;
	composant:any[]=[];
 @Input() index:number;
 @Input() estpaiee:number;



  constructor(private service:ModelService) { }

  ngOnInit(): void {
    console.log(this.service.user)
    console.log("collection")
   console.log(this.collection)
  	 this.service.getElementParId('model',this.collection.idModel)
  	 .subscribe(res=>{
       console.log(res)
           this.model=res;
           for(var i in this.model.composants){
           	this.service.getElementParId(this.model.composants[i].composant,this.collection.composant[i])
           	  	 .subscribe(rest=>{
           	  	 	  	this.composant.push(rest)
           	  	 });

         

           }
console.log('////')
           console.log(this.model)
           console.log(this.composant)



  	
  });

}
  addCollectionP(){
    console.log(1)
       const list:Number[]=[];
    for(var i=0 ;i<this.model.composants.length;i++){
          list.push(this.model.composants[i].idModel)
    }
    console.log(2)
    
      const collectionspaiee = new CommandePaiee(null,this.model.id
      ,list,this.collection.longure,this.collection.withCoture,20,20 ,this.service.user.id,null);
      console.log(collectionspaiee)
      this.service.addCollectionPaiee(collectionspaiee).subscribe(res=>{
               this.service.deleteCollection(this.collection.id).subscribe(
                 ()=>{
                       window.location.reload();

                 })

         


        })
      


  }
}
