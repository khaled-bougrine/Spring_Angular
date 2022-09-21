import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ModelService} from '../service/Model.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Collection } from '../models/Model.Collection';
import { CommandePaiee } from '../models/Model.CommandePaiee';
import { ComTissus } from '../models/Model.ComTissus';



import 'rxjs/add/observable/interval';
import {timer} from 'rxjs/observable/timer';
import { FormGroup ,FormBuilder,FormArray} from '@angular/forms';



@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

	//modelshow:any;
//	composant:any[]=[];
  test:number=0;



  //couture:boolean=false;
  //livraison:boolean=true;
  etatDeCommande:number;
id1:string


	j:number=0;
  length:number;
  tissusserie:any[]=[];
  related:any[];
   //retrieveResonse:any;
 // retrievedImage: any[]=[];
    same:any;
    counterSubscription: Subscription;
    userForm:FormGroup;




  constructor(private route: ActivatedRoute, public service: ModelService,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.id1 = this.route.snapshot.params['id1'];
    const id2 = this.route.snapshot.params['id2'];
    this.service.getElementParId(this.id1,id2).subscribe(res=>{
      this.service.modelshow=res;

    // console.log(this.service.modelshow.composants)
     if(this.id1==='model'){
      for(var i in this.service.modelshow.composants ){
          this.service.getElementParId(
          this.service.modelshow.composants[i].composant,
          this.service.modelshow.composants[i].idModel)
    .subscribe(
        res7t => {
          this.service.composant.push(res7t);
        },
           (error) => {
        console.log('Uh-oh, an error ------occurred! : ' + error);
      }
      );
    this.service.getByNbserie(this.service.modelshow.composants[i].composant,
           this.service.modelshow.composants[i].nbserie)
         .subscribe(
      restt=>{
        console.log('dddddd')
        this.service.sameseries.push(restt);
      },
      (error) => {
        console.log('Uh-oh, an e-----rror occurred! : ' + error);
      }
      );




    }}

    else{
           this.service.getByNbserie(this.id1, this.service.modelshow.nbserie)
    .subscribe(
      restt=>{
        console.log('dddddd')
          this.tissusserie=restt;
    //    console.log(this.sameseries)
      },
      (error) => {
        console.log('Uh-oh, an e-----rror occurred! : ' + error);
      }
      );


        this.service.getRelated(this.id1,this.service.modelshow.fournisseur,
          this.service.modelshow.nbserie).subscribe(res=>{
      this.related=res;
      console.log(this.related)

    })





    }

         /*  for(var i in this.composant ){
      this.service.getByNbserie('accesoire', this.same.nbserie)
    .subscribe(
      res=>{
        this.sameseries.push(res);
      },
      (error) => {
        console.log('Uh-oh, an e-----rror occurred! : ' + error);
      }
      );
  }*/
  console.log("ggggggggggggggggggggggggggggggggggggg")
//  console.log( this.sameseries)

  })





  }

installation(e){
    console.log('eeeeeeeeeeeeee=1')
    this.etatDeCommande=e;



}





  nextimg(){
  	this.j=(this.j+1)%this.service.modelshow.images.length
  }
  previesimg(){
  	if(this.j==0){
  		this.j=this.service.modelshow.images.length
  	}
  	this.j=(this.j-1)

  }
  passimg(e){
  	this.j=e;

  }
  donnerclass(e){
  	if(e==this.j){
  		return 'classActive'
  	}else
  	    return 'classInActive'
  }

  test1(){

          console.log("222222222222222222222222222"+this.test)
const test1 =125.24;
    this.counterSubscription =   timer(0, 80)
  .subscribe(
      (value) => {
        this.test = this.test+test1 / 10;
        console.log(this.test)
        if(value==9){
          this.counterSubscription.unsubscribe()
            }

      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }
  /*
    public id:number,
    public longeur:number,
    public type:string,
    public prixtotal:number,
    public prixpaiee:number,
    public fkTp:number,
       public date: string

  */
  addComTissus(){
     const comtissus =new ComTissus(null,this.service.modelshow.id,
      this.length,this.id1,20,20,
      this.service.user.id,null);
    this.service.addCommandTissus(comtissus).subscribe(res=>{


    })

  }
  addtoVavorite(){
     const list:Number[]=[];
    for(var i=0 ;i<this.service.composant.length;i++){
          list.push(this.service.composant[i].id)
    }

       const collections = new Collection(null,this.service.modelshow.id
      ,list,this.length,this.etatDeCommande,false ,this.service.user.id)
       this.service.addCollection(collections).subscribe(res=>{
         this.service.user.collection.push(res)
         console.log(collections)


         })





  }

  addCollectionP(){
    console.log(1)
       const list:Number[]=[];
    for(var i=0 ;i<this.service.composant.length;i++){
          list.push(this.service.composant[i].id)
    }
    console.log(2)

      const collectionspaiee = new CommandePaiee(null,this.service.modelshow.id
      ,list,this.length,this.etatDeCommande,20,20 ,this.service.user.id,null);

      this.service.addCollectionPaiee(collectionspaiee).subscribe(res=>{




      })




  }



}
