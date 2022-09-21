import { Component, OnInit,Input } from '@angular/core';
import {ModelService} from '../service/Model.service';
import { IdEtLength } from '../models/Model.IdEtLength';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	
  //@Input() compo:IdEtLength;
  @Input()product:any;
	ischange:string='dontchange';
  @Input() length:Number=0;
  //retrieveResonse:any;
 // retrievedImage:any;

  constructor(public service: ModelService) { }

  ngOnInit(): void {
     /* this.service.getElementParId(this.compo.composant,this.compo.idModel)
    .subscribe(
        res7t => {
          //this.service.composant.push(res7t);
             this.product=res7t;

     
          ////////////////////////////////



        },
           (error) => {
        console.log('Uh-oh, an error ------occurred! : ' + error);
      }
      );*/
     /*
        this.service.getImages(this.compo.images[0])
    .subscribe(
        res => {
          this.retrieveResonse = res;
         
          this.retrievedImage= 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        },
           (error) => {
        console.log('Uh-oh, an--------- error occurred! : ' + error);
      }
      );*/
  }
  
  
  mouseEnter(){
    if(!this.length)
  	  this.ischange='change';

  }
  mouseOute(){
  	this.ischange='dontchange';

  }

}
