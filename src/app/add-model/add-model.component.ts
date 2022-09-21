import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormArray} from '@angular/forms';
import { ModelService } from '../service/Model.service';
import { ConfigService } from '../service/Config.service';


import { Model } from '../models/Model.model';
import { Accesoire } from '../models/Model.accesoire';
import { Tissus } from '../models/Model.tissus';
import { IdEtLength } from '../models/Model.IdEtLength';
import { ActivatedRoute } from '@angular/router';
import { ConfigTiss } from '../models/Model.ConfigTiss';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
	userForm:FormGroup;
	selectedFile:File;
	url:string;
  model:String;
  modelList:string[];
  coloreList:string[];
  addmodel:string;
  fabricChoie:string;
  addcolore:string;
configTiss:ConfigTiss;

	listOfimage:String[]=[];



  constructor(private formBuilder: FormBuilder,public service: ModelService, private route: ActivatedRoute,public configservice:ConfigService) { }

    public onFileChanged(event) {
     //Select File
    var reader =new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
    	 this.url=event.target.result;
    }

    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }
   onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    this.service.postImage(this.selectedFile)
    this.listOfimage.push(this.selectedFile.name)


}

  ngOnInit(): void {

     this.model = this.route.snapshot.params['model'];

     if(this.model==='tissus'){
       this.userForm = this.formBuilder.group({
           fabric:'',
         type:'',
         name:'',
      description: '',
      price: '',
      isnew: '',
      bestprice: '',
      solde:0,
      colore:'',
      modele:'',
      length:'',
      nbserie:'',
      idModels:this.formBuilder.array([]),
      listOfimage:this.formBuilder.array([]),
      fournisseur:''


     });
   }else if(this.model==='accesoire'){
      this.userForm = this.formBuilder.group({



   name:'',
     colore:'',
    price:'',
    isnew:'',
     bestprice:'',
    solde:'',
     description:'',
     type:'',
     nbserie:'',

    idModels:this.formBuilder.array([]),
      listOfimage:this.formBuilder.array([]),

    fournisseur:''
  });
    }






   else{
  	   this.userForm = this.formBuilder.group({

         pourquoi:'',
  	   	name:'',
      description: '',
      price: '',
      isnew: '',
      bestprice: '',
      solde:0,
      colore:'',
      couture:'',
      composants: this.formBuilder.array([]),
      listOfimage:this.formBuilder.array([])

      //composantLenght:this.formBuilder.array([])






    }
    );

     }
     if(this.model==='tissus'){
        this.userForm.get("fabric").valueChanges
      .subscribe(f => {
        this.fabricChoie=f;
        this.configservice.getConfigTiss(f).subscribe(res=>{
          console.log(res)
               this.configTiss=res;
        })
       //this.modelList= this.configservice.getmodelTissus(f)
      // this.coloreList=this.configservice.getColoreTissus(f);



      })
    }

  }
  onSubmitForm(){
  	 const formValue = this.userForm.value;
  	 console.log(formValue);


    if(this.model==='tissus'){
      const tissus= new Tissus(null,
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
       this.service.postTissus(tissus)
           //  location.reload();


    }else if(this.model==='accesoire'){

      const accesoire=new Accesoire(null,
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
            console.log(accesoire)

      this.service.postAccesiore(accesoire);
            //location.reload();

    }

    else{
      const idetmodel:IdEtLength[]=formValue['composants'];
     const model= new Model(null,
       formValue['pourquoi'],
       formValue['name'],
       formValue['colore'],
       formValue['price'],
       formValue['isnew'],
       formValue['bestprice'],
       formValue['solde'],
       formValue['description'],
      formValue['couture'],
            formValue['listOfimage'],


       idetmodel

      );

      //console.log(model);
     // const model= new Model(1,'khaled','hgh',25,true,true,2,'kjkj','gfg',[1,2],[1]);
       console.log(model);
     this.service.postModel(model);
     // location.reload();

   }
  }

  addModel(){
    this.configTiss.models.push(this.addmodel)
    this.configservice.putmodelTissus(this.configTiss
);

   console.log(this.configTiss)
  }
  addColore(){
     this.configTiss.colors.push(this.addcolore)
    this.configservice.putmodelTissus(this.configTiss);
       console.log(this.configTiss)

  }
    dropModel(){
   // this.configTiss.models.push(this.addmodel)

  for(var j=0; j<this.configTiss.models.length;j++){
    if(this.configTiss.models[j]==this.addmodel){
      this.configTiss.models.splice(j,1)
    }

  }
 this.configservice.putmodelTissus(this.configTiss);

  }
  dropColore(){
    console.log(this.addcolore);
   for(var j=0; j<this.configTiss.colors.length;j++){
     console.log(this.configTiss.colors[j])
    if(this.configTiss.colors[j]===this.addcolore){
          this.configTiss.colors.splice(j,1)
    }

  }
        this.configservice.putmodelTissus(this.configTiss);
       console.log(this.configTiss)

  }



  getlistOfimage(): FormArray {
    return this.userForm.get('listOfimage') as FormArray;

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
addlistOfimage(){
   const newComposant = this.formBuilder.control(null);
   this.getlistOfimage().push(newComposant)

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

}
