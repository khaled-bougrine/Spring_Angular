import { Component, OnInit } from '@angular/core';
import { ModelService } from '../service/Model.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup ,FormBuilder,FormArray} from '@angular/forms';
import { ConfigService } from '../service/Config.service';
import { Tissus } from '../models/Model.tissus';
import { Accesoire } from '../models/Model.accesoire';

import { ConfigTiss } from '../models/Model.ConfigTiss';

import { IdEtLength } from '../models/Model.IdEtLength';
import { Model } from '../models/Model.model';



@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.css']
})
export class UpdateModelComponent implements OnInit {
model:string;
id:any;
modelUpdate:any;
url:any;
userForm:FormGroup;
myGroup:FormGroup;
////

	selectedFile:File;
  configTiss:ConfigTiss;
	
 
  modelList:string[];
  coloreList:string[];

	listOfimage:String[]=[];

  constructor(public service: ModelService, private formBuilder:FormBuilder,private route:ActivatedRoute,public configservice:ConfigService,public router:Router 
) { }

  ngOnInit(): void {
   this.model = this.route.snapshot.params['id1'];
    this.id = this.route.snapshot.params['id2'];
   this.service.getElementParId(this.model,this.id).subscribe(res=>{
      this.modelUpdate=res;
         if(this.model==='tissus'){

                this.configservice.getConfigTiss(this.modelUpdate.fabric).subscribe(res=>{
          console.log(res)
               this.configTiss=res;
        })
         //	this.modelList= this.configservice.getmodelTissus(this.modelUpdate.fabric)
     //  this.coloreList=this.configservice.getColoreTissus(this.modelUpdate.fabric);

         
         	console.log(this.modelUpdate)
       this.userForm = this.formBuilder.group({
           fabric:this.modelUpdate.fabric,
         type:this.modelUpdate.type,
         name:this.modelUpdate.name,
      description:this.modelUpdate.description,
      price: this.modelUpdate.price,
      isnew: this.modelUpdate.isnew,
      bestprice: this.modelUpdate.bestprice,
      solde:this.modelUpdate.solde,
      colore:this.modelUpdate.colore,
      modele:this.modelUpdate.modele,
      length:this.modelUpdate.length,
      nbserie:this.modelUpdate.nbserie,
      idModels:this.formBuilder.array(this.modelUpdate.idModels),
      fournisseur:this.modelUpdate.fournisseur,
      listOfimage:this.formBuilder.array(this.modelUpdate.images)


     })

       


    
       	
   }else if(this.model==='getaccesoire'){
      this.userForm = this.formBuilder.group({


    
   name:this.modelUpdate.name,
     colore:this.modelUpdate.colore,
    price:this.modelUpdate.price,
    isnew:this.modelUpdate.isnew,
     bestprice:this.modelUpdate.bestprice,
    solde:this.modelUpdate.solde,
     description:this.modelUpdate.descrip,
     type:this.modelUpdate.type,
     nbserie:this.modelUpdate.nbserie,
    

    fournisseur:this.modelUpdate.nbserie,
      listOfimage:this.formBuilder.array(this.modelUpdate.images)


  });
    }

   




   else{

    
 
  	   this.userForm = this.formBuilder.group({

         pourquoi:this.modelUpdate.pourquoi,
  	   	name:this.modelUpdate.name,
      description: this.modelUpdate.description,
      price: this.modelUpdate.price,
      isnew: this.modelUpdate.isnew,
      bestprice: this.modelUpdate.isbestsell,
      solde:this.modelUpdate.sold,
      colore:this.modelUpdate.colore,
      modele:this.modelUpdate.modele,
      composants: this.formBuilder.array([]),
      listOfimage:this.formBuilder.array(this.modelUpdate.images)

      //composantLenght:this.formBuilder.array([])
    }
    );

     }
  }

  )








  }

  getComposant(): FormArray {
    return this.userForm.get('composants') as FormArray;

}
 getIdModel(): FormArray {
    return this.userForm.get('idModels') as FormArray;

}
addIdModel(){
   const newComposant = this.formBuilder.control(null);
   this.getIdModel().push(newComposant)

}

  addcomposant() {
    const newComposant = this.formBuilder.group({
      id:null,
      idModel:'',
      length:'',
      composant:'',
      nbserie:''
    }

      );

    this.getComposant().push(newComposant);
     
}
onSubmitForm(){
     const formValue = this.userForm.value;

  if(this.model=='tissus'){
    const tissus= new Tissus(this.id,
           formValue['name'],
         formValue['type'],

    
       formValue['colore'],
       formValue['price'],
       formValue['isnew'],
       formValue['bestprice'],
       formValue['solde'],
       formValue['description'],
      formValue['modele'],
       formValue['listOfimage'],
       formValue['nbserie'],
        formValue['length'],
          
          formValue['fabric'],
            formValue['idModels'],
   
            formValue['fournisseur']
      
      );


            console.log(tissus)
            this.service.updateModel(tissus,'tissus')
                     this.router.navigate(['/toutlesmodel'])

            /*
              this.userForm = this.formBuilder.group({

         pourquoi:this.modelUpdate.pourquoi,
         name:this.modelUpdate.name,
      description: this.modelUpdate.description,
      price: this.modelUpdate.price,
      isnew: this.modelUpdate.isnew,
      bestprice: this.modelUpdate.isbestsell,
      solde:this.modelUpdate.sold,
      colore:this.modelUpdate.colore,
      modele:this.modelUpdate.modele,
      composants: this.formBuilder.array(this.modelUpdate.composants),
      listOfimage:this.formBuilder.array(this.modelUpdate.images)

            */
        
  }else if (this.model=='model'){


    const model1 =new Model(this.id,
      formValue['pourquoi'],         
        formValue['name'],
        formValue['colore'],
           formValue['price'],
              formValue['isnew'],
                 formValue['isbestprice'],
                    formValue['solde'],
                       formValue['description'],
             formValue['modele'],
                          formValue['listOfimage'],
                        this.modelUpdate.composants



)

    console.log(model1)
            this.service.updateModel(model1,'Model')
                 this.router.navigate(['/toutlesmodel'])



  }else if(this.model==='getaccesoire'){

      const accesoire=new Accesoire(this.id,
        formValue['name'],
         formValue['type'],
       formValue['colore'],
       formValue['price'],
       formValue['isnew'],
       formValue['bestprice'],
       formValue['solde'],
       formValue['description'],
         formValue['listOfimage'],

       formValue['idModels'],
       formValue['nbserie'],
       formValue['fournisseur']

      



        )
      this.service.updateModel(accesoire,'getaccesoire')
             this.router.navigate(['/toutlesmodel'])



    }


}
/*
onUpload(){
   this.service.postImage(this.selectedFile)
    this.modelUpdate.images.push(this.selectedFile.name)


}*/
addlistOfimage(){
   const newComposant = this.formBuilder.control(null);
   this.getlistOfimage().push(newComposant)

}
  getlistOfimage(): FormArray {
    return this.userForm.get('listOfimage') as FormArray;

}
onFileChanged(d){

}


}
