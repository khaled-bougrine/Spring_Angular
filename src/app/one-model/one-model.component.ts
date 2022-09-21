import { Component, OnInit,Input } from '@angular/core';
import {Model} from '../models/Model.model';
import { ModelService } from '../service/Model.service';

@Component({
  selector: 'app-one-model',
  templateUrl: './one-model.component.html',
  styleUrls: ['./one-model.component.css']
})
export class OneModelComponent implements OnInit {
	@Input() model:Model;
	 j:number;
   loveimg:string="assets/love.png";
   lovehover:string="nelovepas";
   test:boolean;
 //  retrieveResonse:any;
 // retrievedImage: any[]=[];
 


  constructor(public service: ModelService) { }

  ngOnInit(): void {
    console.log(this.model.images)
    /*for(var i in this.model.images ){
        this.service.getImages(this.model.images[i])
    .subscribe(
        res => {
          this.retrieveResonse = res;
         
          this.retrievedImage.push ( 'data:image/jpeg;base64,' + this.retrieveResonse.picByte);
        },
           (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      }
      );

    }*/
  
  	this.j=0;
  }


  mouseEnter(){
   const length= this.model.images.length ;

 
this.test=true;

  	    setTimeout(()=>{
          if(this.test==true)
          this.j=(this.j+1)%(length);console.log(this.j)},500);

  		setTimeout(()=>{
        if(this.test==true)
        this.j=(this.j+1)%(length);console.log(this.j)},1200);
  		setTimeout(()=>{
        if(this.test==true)
        this.j=(this.j+1)%(length);console.log(this.j)},1900);

  		
  	
  }
  mouseOute() {
    this.test=false;
  	this.j=0;
  }
  love(){
    if(this.loveimg=="assets/love.png")
         this.loveimg="assets/loveRed.png"
else
  this.loveimg="assets/love.png"

  }
  lovehoverin(){
    if( this.loveimg==="assets/love.png")
    this.lovehover='love'
  }
  lovehoverout(){

    this.lovehover='nelovepas'
  }

}
