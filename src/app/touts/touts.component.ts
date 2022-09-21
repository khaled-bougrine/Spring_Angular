import { Component, OnInit  } from '@angular/core';
import { ModelService } from '../service/Model.service';
import { ConfigService } from '../service/Config.service'
import { Model } from '../models/Model.model';
import { User } from '../models/Model.User';
import { ConfigTiss } from '../models/Model.ConfigTiss';

import { ActivatedRoute,Router } from '@angular/router';
import {FormBuilder, FormGroup,FormsModule,NgForm} from '@angular/forms';

@Component({
  selector: 'app-touts',
  templateUrl: './touts.component.html',
  styleUrls: ['./touts.component.css']
})
export class ToutsComponent implements OnInit {
  //testColore='Aquamarine';
   id1:string;id2:string;
  ischecked=false;
	min:number=null;
   max:number=null;
   colore:string=null;
   modele:string=null;
   length:number=0;
  
   nul=null;
    modelTissus:string[];
    coloreTissus:string[];
  list:any[];
  list1:Model[];
  configtiss:ConfigTiss;
 
  i:number=0;
  user:any;

  contactForm:FormGroup;



  constructor( public service: ModelService, private fb:FormBuilder,private route:ActivatedRoute ,public sreviceConfig:ConfigService,public router:Router) { 
    
       // this.service.test()
      // this.user=this.service.getUser()
         
  }

  ngOnInit(): void {
   //  this.service.test()

 
   this.test()

    

       
  
    


   this.contactForm = this.fb.group({
  
   modele:null,min:null,max:null,colore:null,length:null
      
    });
     this.contactForm.get("modele").valueChanges
      .subscribe(f => {
        console.log(f);
        this.modelfilter(f);

      })
       this.contactForm.get("min").valueChanges
      .subscribe(f => {
        console.log(f);
      //  this.pricemin(f);

      })
          this.contactForm.get("max").valueChanges
      .subscribe(f => {
        console.log(f);
       // this.priceMax(f);

      })
          this.contactForm.get("min").valueChanges
      .subscribe(f => {
        console.log(f);
      //  this.pricemin(f);

      })
                this.contactForm.get("colore").valueChanges
      .subscribe(f => {
        console.log(f);
        this.colors(f);

      })

  }


  test(){
     this.id1 = this.route.snapshot.params['id1'];
          this.id2 = this.route.snapshot.params['id2'];
          console.log(this.sreviceConfig.modelTissue.cotton)
          if(this.id1==='tissus'){
                                this.sreviceConfig.getConfigTiss(this.id2).subscribe(res=>{
                        console.log(res)
                           this.configtiss=res;
        })

              //  this.modelTissus=this.sreviceConfig.getmodelTissus(this.id2)
               // this.coloreTissus=this.sreviceConfig.getColoreTissus(this.id2)
            

          }

    this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
      this.list=res;
      
    }


    );
  }
  
      iColore:number=0;
     colors(e){
       this.colore=e
       if(this.iColore===0){
         this.iColore=this.iColore+1;
          this.list=this.list.filter(res=>{
     return res.colore===e;
             })
       }else{
         this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
      this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.length,res);
    } );}}
  

   iMinMax:number=0;
  price(min,max){
    if(max!=0){
      console.log(max)
    this.min=min;
    this.max=max;

       
         this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
      this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.length,res);
    } );}
       

       else{
          this.min=min;
   

       if(this.iMinMax===0){
         this.iMinMax=this.iMinMax+1;
          this.list=this.list.filter(res=>{
     return this.price>=min;
             })
       }else{
         this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
          this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.length,res);
    } );}


       }

    //this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.list1);

  }

  imodel:number=0;
  modelfilter(e){
    this.modele=e;

       if(this.imodel===0){
         this.imodel=this.imodel+1;
          this.list=this.list.filter(res=>{
     return res.modele===e;
             })
       }else{
         this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
      this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.length,res);
    } );}
    


  }
  toutlesModel(){
    this.imodel=0;
    this.modele=null;
        this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
      this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.length,res);
    } );
  }
  toutlesprix(){
    console.log('rrrrrr')
    this.iMinMax=0;
    this.min=null;this.max=null;
        this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
      this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.length,res);
    } );


  }
  fabricChange(fabric:string){
    this.router.navigate(['/tout/'+this.id1+'/'+fabric]).then(()=>{
       this.test();

    })

   
  }
  ilength:number=0;
  filterLength(){
    console.log(this.length)

    if(this.ilength==0){
   
    this.ilength=this.ilength+1;

    this.list=this.list.filter(res=>{
      return this.length<=res.length;
    });
    }else{
         this.service.getModelsByUtilisation(this.id1,this.id2).subscribe(res=>{
      this.list=this.service.Filter(this.min,this.max,this.colore,this.modele,this.length,res);
    } );}

   




  }

  
   

}
