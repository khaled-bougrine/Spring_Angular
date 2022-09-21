import { Component, OnInit ,Input,HostListener} from '@angular/core';
import {ModelService} from '../service/Model.service';
import { Accesoire } from '../models/Model.accesoire';
import { IdEtLength } from '../models/Model.IdEtLength';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sameseries',
  templateUrl: './sameseries.component.html',
  styleUrls: ['./sameseries.component.css']
})
export class SameseriesComponent implements OnInit {
       @HostListener('window:resize')
    getScreenSize(event?) {
     //this.f= window.innerWidth/200
      console.log(this.f)

      if(window.innerWidth<1200&&window.innerWidth>940){
        this.f=4;
        this.size=window.innerWidth;
      }else  if(window.innerWidth<940&&window.innerWidth>720){
        this.f=3;
          this.size=window.innerWidth;
      }else  if(window.innerWidth<720){
        this.f=2;
          this.size=window.innerWidth;
      }else{
        this.f=5;
          this.size=window.innerWidth;
      }
      
      console.log(this.f)
         
         // console.log(window.innerHeight, window.innerWidth);
    }
   //nbserie:string;
	@Input() list:any[];

	d:number;
  f:number;
  size:number;
  @Input() index:number=-1;
  @Input() type; 
 


  constructor( public service: ModelService) { }

  ngOnInit(): void {
    console.log('fffffffffffffffffffffffffff')
    console.log(window.screen.width)
    this.size=window.screen.width;


      if(this.size>1300){
        this.f=5;
        
      }else  if(this.size<=1300&&this.size>1200){
        this.f=4;
        
      }else  {
        this.f=3;
      }
        
      
    



      /*
       this.service.getImages(this.service.composant[this.index].images[0])
    .subscribe(
        res => {
          this.retrieveResonse = res;
         
          this.retrievedImage= 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        },
           (error) => {
        console.log('Uh-oh, an--------- error occurred! : ' + error);
      }
      );


  
        console.log('serie')
    console.log(this.list)
    */
  }


  next(){
    if(this.f+5<this.list.length)
          {this.f=this.f+5;
                  this.d=this.d+5;}
        else
       {   this.f=this.list.length
               this.d=this.d+5}
  }
  previes(){

       if(this.d-5>0){
          this.d=this.d-5;
       
        this.f=this.d+5;}
        else{
          this.d=0;
        
        this.f=5;
      }
  }
  
  change(pro){
    console.log(pro)
   // const idAndLength= new IdEtLength(null,pro.id, this.service.modelshow.composants[this.index].length,this.service.modelshow.composants[this.index].composant,pro.nbserie)

     //this.service.modelshow.composants[this.index]=idAndLength;
     this.service.composant[this.index]=pro

     console.log(this.service.modelshow.composants[this.index])
   
    

     
  
  }

  

  

}
