import { User } from '../models/Model.User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class  UserService{
	 user:User;
	favorite:any[]=[];




  constructor(private httpClient: HttpClient) { 
	  
	  }


	  
	}