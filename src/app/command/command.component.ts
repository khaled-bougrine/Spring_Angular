import { Component, OnInit,Input } from '@angular/core';
import { ComTissus } from '../models/Model.ComTissus';

import {ModelService} from '../service/Model.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
	@Input() commande:ComTissus;
	model:any;

  constructor(public service :ModelService) { }

  ngOnInit(): void {
  	 this.service.getElementParId(this.commande.type,this.commande.idModel).subscribe(
       res =>{
         this.model=res;
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
    



        })


  	


  }

}
