import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormArray} from '@angular/forms';

import { ModelService } from '../service/Model.service';
import { User } from '../models/Model.User';
import { Router } from '@angular/router';





@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
	userForm:FormGroup;
  noValid:boolean=false;


  constructor(private formBuilder: FormBuilder,public router:Router
    ,public service: ModelService) { }


  ngOnInit(): void {
  	 this.userForm = this.formBuilder.group({
  	 	name:'',prename:'',mail:'',password:'',etat:'',codePostale:'',addresse:'',telephone:''


  	 })
  }
  onSubmitForm(){
  	const user = new User(null,
  		this.userForm.value['name'],
  		this.userForm.value['prename'],
  		this.userForm.value['mail'],
  		this.userForm.value['password'],
  		this.userForm.value['etat'],
  		this.userForm.value['codePostale'],
  		this.userForm.value['addresse'],
  		this.userForm.value['telephone'],
  		[],
      [],[],[]





  		)
  	console.log(user)
     this.service.getUser(this.userForm.value['mail'],
      this.userForm.value['password']).subscribe(rest=>{
        if(rest==null){

          this.service.postUser(user)
            .subscribe(
        res => {
            this.service.user=res
           this.service.name= res.prename+' '+res.name;
      
     //  console.log('fffffffffff'+ this.name)

             this.service.logo=res.name.charAt(0).toUpperCase() +res.prename.charAt(0).toUpperCase()
console.log(this.service.logo)

        this.service.connecter=true;
console.log(this.service.name)

      
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
              // this.service.user=res;
         //  this.service.getVavorite();
            

           this.router.navigate(['/'])
        

        }else{
          this.noValid=true

        }
        


      })


  	
  	//console.log(this.userForm.value)
  }

}
