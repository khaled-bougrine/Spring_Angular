import { Model } from '../models/Model.model';
import { Tissus } from '../models/Model.tissus';
import { User } from '../models/Model.User';

import { Accesoire } from '../models/Model.accesoire';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdEtLength } from '../models/Model.IdEtLength';
import { Observable } from 'rxjs/Observable';
import { Favorite } from '../models/Model.Favorite';
import {Collection} from '../models/Model.Collection';
import {CommandePaiee} from '../models/Model.CommandePaiee';
import { ComTissus } from '../models/Model.ComTissus';



//import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Injectable()
export class  ModelService{
	composant:any[]=[];
	modelshow:any;
	//composant
	//favorite:Favorite[]=[];
	list:Model[];
	list1:Model[];
	 user:User=null;
	 visibility:boolean;
	 connecter:boolean;
	 i:number=0;
	 //////pour La cpnnection
	   name:string;
       logo:string;
  sameseries:any[][]=[];


  //public data:any=[]


	  constructor(private httpClient: HttpClient) {

            //this.storage.set('prename', 'bougrine');
	  }

/*
	  getUser(){
	  	return this.storage.get('user')
	  }
*/

/*getVavorite(){
	 for(var j in this.user.favorits ){

      this.getElementParId(this.user.favorits[j].composant,this.user.favorits[j].idModel).subscribe(
       test =>{
         this.favorite.push(test)
         console.log('ggggggggggggg548ggggggggg'+this.i)


        })}

}
*/



/*
	  test(){
	  		  this.i=this.i+1;
	  		  this.favorite=[]
    this.testUser().subscribe(res=>{
      this.user=res;
    for(var j in res.favorits ){

      this.getElementParId(res.favorits[j].composant,res.favorits[j].idModel).subscribe(
       test =>{
         this.favorite.push(test)
         console.log('ggggggggggggg548ggggggggg'+this.i)


        })}

    })

	  }
	  */
	  //=============================update------------------
	  ////ADD VAVORITE////////////////////////////////
	addFavorite(e):Observable<Favorite>{

		return this.httpClient.post<Favorite>('http://localhost:8080/addFavorite/',e);


	}
	//======================================Collection=========================
	addCollectionPaiee(e):Observable<CommandePaiee>{
		return this.httpClient.post<CommandePaiee>('http://localhost:8080/addCollectionPaiee/',e)

	}
	getCommande(e,id):Observable<any>{
		return this.httpClient.get<CommandePaiee>('http://localhost:8080/'+e+'/'+id)
	}
	/*********************************/
	addCommandTissus(e):Observable<ComTissus>{
		return this.httpClient.post<ComTissus>('http://localhost:8080/addComTissus/',e)

	}
	/*
	getCommandeTissus(id):Observable<ComTissus>{
		return this.httpClient.get<ComTissus>('http://localhost:8080/getComTissus/'+id)
	}
	*/

	addCollection(c):Observable<Collection>{
		return this.httpClient.post<Collection>('http://localhost:8080/addCollection',c);
	}
	deleteCollection(c):Observable<any>{
				return this. httpClient.delete('http://localhost:8080/deleteCollection/'+c)

	}


	deleteFavorite(e){
			this. httpClient.delete('http://localhost:8080/deleteFavorite/'+e).subscribe(
			  () => {
          console.log(' terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
	}




	  updateUser(){
	  	this.httpClient
      .put('http://localhost:8080/update', this.user)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

	  }
	  /////////////////////updateModel/////////
	  updateModel(model:any,type:string){
	  	this.httpClient
      .put('http://localhost:8080/updatemodel/'+type , model)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

	  }




	  //=======*********************=============================repouser
	                   //getUser
  getUserById(id):Observable<any>{
	  	return this.httpClient.get<any>('http://localhost:8080/userById/'+id)

	  }


	 getUser(id1:string,id2:string):Observable<any>{
	  	return this.httpClient.get<any>('http://localhost:8080/user/'+id1+'/'+id2)

	  }


	  //====================POSTUSER++++++++++++++++++++
	  postUser(user:User):Observable<User>{
	  	return this.httpClient
	  	.post<User>('http://localhost:8080/addUser', user)


	  }
	  //==================================GETCollection
	  /*
	  getCollection(e):Observable<Collection>{
	  	return this.httpClient
	  	.get<Collection>('http://localhost:8080/getCollection/'+e)

	  }
	  */

	  //---------------postModel------------------
	  postModel(model:Model){
	  	  this.httpClient
      .post('http://localhost:8080/addModel', model)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

	  }
	  //---------------------test------------------
	  testUser():Observable<User>{
	 return this.httpClient.get<User>('http://localhost:8080/test');

	  }
	  //------------------postTissus-----------------
	  postTissus(tissus:Tissus){
	  	  this.httpClient
      .post('http://localhost:8080/addTissus', tissus)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

	  }
	  //====================GetImages=====================

	  getImages(imageName:string){
	  	return this.httpClient.get('http://localhost:8080/get/' + imageName);

  }
  getImagesById(id:number){
	  	return this.httpClient.get('http://localhost:8080/getById/' + id);


  }


	    //------------------postAccesiore-----------------
	  postAccesiore(accesoire:Accesoire){
	  	  this.httpClient
      .post('http://localhost:8080/addAccesiore', accesoire)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

	  }
	  //---------get----Element---par---id -----------

	  getElementParId(id1:string,id2:any):Observable<any>{
	  	return this.httpClient.get<any>('http://localhost:8080/getById/'+id1+'/'+id2)

	  }
	  //================GET ALL======================
	  getAll(id:string):Observable<any[]>{
	  	return this.httpClient.get<any[]>('http://localhost:8080/getall/'+id)

	  }


	  //------------------postImages------------------
	  postImage(image:File){

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', image, image.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log('Image uploaded successfully')
        } else {
          console.log('Image not uploaded successfully')
        }
      }
      );

	  }
	  //-=======================getModelsByUtilisation==============-
	  getModelsByUtilisation(id1:string ,id2:string):Observable<any[]>{

	     return this.httpClient.get< any[]>('http://localhost:8080/get/'+id1+'/'+id2)

	  }
	  getRelated(t,e,p):Observable<any[]>{
	     return this.httpClient.get< any[]>('http://localhost:8080/getRelated/'+t+'/'+e+'/'+p)

	  }
	  //=========================getallImages===========================
	  getAllImages():Observable<number[]>{
	     return this.httpClient.get< number[]>('http://localhost:8080/getAllImages')

	  }

	  //=====================get PAR NBSERIE===============
	  getByNbserie(id1:string ,id2:string):Observable<Accesoire[]>{
	  	return this.httpClient.get<Accesoire[]>('http://localhost:8080/getByNbserie/'+id1+'/'+id2)


	  }
	  //======================DELETE=======================
	  delete(id:string,name:number){
	  	return this.httpClient.delete('http://localhost:8080/delete/'+id+'/'+name)
	  }



	testlist(list:string[],element:string):boolean{

		for(var color in list ){
	  				if(element===color){
	  					console.log('bonjo')

	  					return true;
	  				}
	  			}return false;


	}
	//======================filtrage================//

	  Filter(min,max,colore,modele,length,list1:any[]):any[]{



	  	if((colore!=null)){
	  		 list1=list1.filter(rest=>{   return rest.colore===colore;})

	  	}
      if (min!=null){
      list1=list1.filter(rest=>{   return rest.price>=min;})
  }
    if(max!=null){
      list1= list1.filter(rest=>{   return rest.price<=max;})
  }
  if(modele!=null){
  	list1= list1.filter(rest=>{   return rest.modele===modele;})

  }
  if(length!=null){
  	list1= list1.filter(rest=>{   return rest.length>=length;})

  }

  return list1;

      }
/*
      getsameseries(){
      	return this.list2;

      }

*/




}

