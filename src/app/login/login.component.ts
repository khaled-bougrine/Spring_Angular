import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormArray,Validators} from '@angular/forms';
import { ModelService } from '../service/Model.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userForm:FormGroup;
  noValid:boolean=false;
  	


  constructor(private formBuilder: FormBuilder,public service: ModelService,public router:Router) { }

  ngOnInit(): void {
  	  this.userForm = this.formBuilder.group({

	mail:['',[Validators.required, Validators.email]],
	password:['',Validators.required]
}
	)



  }
  onSubmitForm(){
  	console.log(this.userForm.value)
    this.service.getUser(this.userForm.value['mail'],
      this.userForm.value['password']).subscribe(res=>{
        if(res != null){
           this.service.user=res
           this.service.name= res.prename+' '+res.name;
      
     //  console.log('fffffffffff'+ this.name)

             this.service.logo=res.name.charAt(0).toUpperCase() +res.prename.charAt(0).toUpperCase()
console.log(this.service.logo)

        this.service.connecter=true;
console.log(this.service.name)
         //  this.service.getVavorite();
           

            localStorage.setItem('id', res.id);

           this.router.navigate(['/']).then(
            /* ()=>{
              window.location.reload();
             }*/
             )

               }else{
                 this.noValid=true;
               }})
/*
   navigation(fabric:string){
   
    })

   
  }*/
  


}
}

