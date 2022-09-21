import { Component, OnInit } from '@angular/core';
import {ModelService} from '../service/Model.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	bestprice:any[];
	class:string='class2';
  class1:string='class2';
  class2:string='visible';
  class3:string='hide';
  class4:string='hide';
  class5:string='hide';

  constructor(public service: ModelService) { }

  ngOnInit(): void {
  	this.bestprice=this.service.list;
    
    setTimeout(()=>{
      if(this.class2=='visible'){
             this.class2='hide';this.class3='visible';console.log("ffff")

      }
 

    },5000)

    setTimeout(()=>{
            if(this.class3=='visible'){

      this.class3='hide';this.class4='visible';
    }

    },7500)
      setTimeout(()=>{
              if(this.class4=='visible'){

        this.class4='hide';this.class2='visible';
      }

    },9500)
    
  	//console.log(this.bestprice)
  }
    mouseEnter(){
  	this.class='class1';
  	
  }
      mouseEnter1(){
    this.class1='class';
    
  }
  change(){
    if(this.class2=='visible'){
      this.class2='hide';this.class3='visible';

    }
    else if(this.class3=='visible'){
      this.class3='hide';this.class4='visible';

    }else {
            this.class4='hide';this.class2='visible';


    }
  }
    change1(){
    if(this.class2=='visible'){
      this.class2='hide';this.class4='visible';

    }
    else if(this.class3=='visible'){
      this.class3='hide';this.class2='visible';

    }else {
            this.class4='hide';this.class3='visible';


    }
  }
  deconnecter(){
  localStorage.clear();
   this.service.connecter=false;
 this.service.user=null;
 this.service.name=null;
 this.service.logo=null;
 this.service.visibility=false;
 //location.reload();



 


}



}
