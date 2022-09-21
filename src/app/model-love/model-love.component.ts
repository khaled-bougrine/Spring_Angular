import { Component, OnInit,Input } from '@angular/core';
import {ModelService} from '../service/Model.service';
import { Favorite } from '../models/Model.Favorite';
import { Router } from '@angular/router';


@Component({
  selector: 'app-model-love',
  templateUrl: './model-love.component.html',
  styleUrls: ['./model-love.component.css']
})
export class ModelLoveComponent implements OnInit {
	@Input() product:Favorite;
modelLove  :any;
//retrieveResonse:any;
//retrievedImage:any;
  constructor( public service:ModelService,public router:Router) { }

  ngOnInit(): void {
    if(this.product){

     this.service.getElementParId(this.product.composant,this.product.idModel).subscribe(
       res =>{
         this.modelLove=res;
          /*     this.service.getImages(this.modelLove.images[0])
    .subscribe(
        rest => {
          this.retrieveResonse = rest;
         
          this.retrievedImage ='data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        },
           (error) => {
        console.log('Uh-oh, an error----------- occurred! : ' + error);
      }
      );*/
    



        })}

  
  }
  navigate(){
     this.router.navigate(['/model/'+this.product.composant+'/'+this.product.idModel])

  }
}



