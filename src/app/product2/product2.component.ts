import { Component, OnInit,Input } from '@angular/core';
import {ModelService} from '../service/Model.service';
import { Favorite } from '../models/Model.Favorite';
import { User } from '../models/Model.User';

import { Router } from '@angular/router';



@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
	 @Input() product : any ;
   @Input() type:string;
   @Input() isMyProduct:boolean=false;
   @Input() estDansComposant:boolean=false;
   isload:boolean=true;

	// retrieveResonse:any;
	// retrievedImage:any;
  // isMyProduct:boolean=false;
   index:number;
   love:string='assets/love.png';
   useProduct:string='hide';


  constructor( public service:ModelService,public router:Router) {
  

  }

  ngOnInit(): void {
    /*

             for (var i in this.service.composant) {
  //console.log(this.product.id +""+this.service.composant[i].id)

  if (this.service.composant[i].id===this.product.id){
          this.isMyProduct=true;
  }
}
*/

             /*this.service.getImages(this.product.images[0])
    .subscribe(
        rest => {
          this.retrieveResonse = rest;
          for (var i in this.service.composant) {
  //console.log(this.product.id +""+this.service.composant[i].id)

  if (this.service.composant[i].id===this.product.id){
          this.isMyProduct=true;
  }



  
}
         
         // this.retrievedImage ='data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        },
           (error) => {
        console.log('Uh-oh, an error----------- occurred! : ' + error);
      }
      );*/
    if(this.service.user){
        for(var j=0 ;j<this.service.user.favorits.length;j++){
     console.log('.')
     if(this.service.user.favorits[j].composant===this.type&& this.service.user.favorits[j].idModel===this.product.id){
    
         this.love="assets/loveRed.png"
         this.index=j;
         console.log('trtrttrtr')
         
     
     }

   }
    }

  //console.log()
  //console.log(this.service.composant)


  }
      onImageLoad(evt) {
        if (evt) {
          this.isload=false;
          console.log('ggggggggggggggggggggg')
       
        }
      }
  loveit(){
       const id = localStorage.getItem('id');
       if(!id){
         this.router.navigate(['/login'])

       }else{
             if(this.love=="assets/loveRed.png"){
      //console.log(this.index)
     //  const index = this.service.favorite.indexOf(this.product);
       
      // this.service.favorite.splice(index)


//console.log(this.index)
         for(var j=0 ;j<this.service.user.favorits.length;j++){
           
     console.log('.')
     if(this.service.user.favorits[j].composant===this.type&& this.service.user.favorits[j].idModel===this.product.id){
               console.log(this.service.user.favorits[j].id)

                this.service. deleteFavorite(this.service.user.favorits[j].id)
               this.service.user.favorits.splice(j,1)

              
         
     
     }

   }

       console.log(this.service.user.favorits)
    //  console.log(this.service.favorite)
    // this.service.updateUser()
       this.love='assets/love.png'
     


    }

    else{

   //   this.index=this.service.user.favorits.length
     // this.service.favorite.push(this.product)
      this.love="assets/loveRed.png"
      const fav =new Favorite(null,this.product.id,this.type,this.service.user.id)


     // this.service.user.favorits.push(fav)
      this.service.addFavorite(fav).subscribe(
        res => {
          this.service.user.favorits.push(res)
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

      // this.service.updateUser()
       this.index= this.service.user.favorits.indexOf(fav)
       console.log(this.service.user.favorits)
     //  console.log(this.service.favorite)
  
  }

       }



}
mouseEnter(){
  if(!this.isMyProduct){
      this.useProduct='visible';
  }

}
mouseOute(){
  this.useProduct='hide';
}
 /* change(){
    //console.log(pro)
    this.service.composant[this.place]=this.product;
    this.isMyProduct=true;
    this.ngOnInit()

    

     
  
  }*/
  routeModel(){
    if(this.type){
      this.router.navigate(['/model/'+this.type+ '/'+this.product.id]).then(()=>{
        window.location.reload()
      })
console.log('eeeeeeeeeeee')
    }
  }
 

}
