import { Component, OnInit  } from '@angular/core';
import { ModelService } from './service/Model.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test6';
  src= '/home/khaled/Desktop/66.jpg';
  name:string;
  logo:string;


constructor(public service: ModelService) {
     
}
  ngOnInit(): void {
 
         //console.log(id)
         const id = localStorage.getItem('id');

     if(!this.service.user&&id ){
         //  const id = localStorage.getItem('id');
           console.log('ba33333333333333333333333333333333333333333333333333333')
              this.service.getUserById(id).subscribe(res=>{
           this.service.user=res;
            this.service.name= res.prename+' '+res.name;
      
       console.log('fffffffffff'+ this.name)

       this.service.logo=this.service.user.name.charAt(0).toUpperCase() +res.prename.charAt(0).toUpperCase()

     
        this.service.connecter=true;
            
     })
     

     }
   
  }

vivibilityUser(){
  if(!this.service.visibility){
     this.service.visibility=true;
}else{
   this.service.visibility=false;

}

}
}
