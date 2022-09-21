import { Component, OnInit } from '@angular/core';
import { Collection } from '../models/Model.Collection';
import { Model } from '../models/Model.model';
import {ModelService} from '../service/Model.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/Model.User';



@Component({
  selector: 'app-collection-admin',
  templateUrl: './collection-admin.component.html',
  styleUrls: ['./collection-admin.component.css']
})
export class CollectionAdminComponent implements OnInit {
  collection:any;
	model:Model;
	composant:any[]=[];
  user:User;
  id:string;

  constructor(public service:ModelService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    	 this.id =this.route.snapshot.params['id'];
       const id1 =this.route.snapshot.params['id1'];

    	this.service.getCommande(this.id,id1).subscribe(res1=>{
        console.log(res1)
        this.collection=res1;
      this.service.getUserById(this.collection.fku).subscribe(user=>{
        this.user=user;
        console.log(this.user)

      })
    		////////////////////////////////////////////
        if(this.id!='ComTissus'){
       		 this.service.getElementParId('model',this.collection.idModel)
  	 .subscribe(res=>{

       console.log(res)
           this.model=res;
          for(var i in this.model.composants){
           	this.service.getElementParId(this.model.composants[i].composant, this.collection.composant[i])
           	  	 .subscribe(rest=>{
           	  	 	  	this.composant.push(rest)
                        console.log("**")
           	  	 });

         

           }
  });
    }else{
             this.service.getElementParId(this.collection.type,this.collection.idModel)
     .subscribe(rest=>{
       this.composant.push(rest)

     });



     ///////////////////*******************///////////////////////////*****
    }
    // *****************////////////////////

    	})



  	
  }


}
