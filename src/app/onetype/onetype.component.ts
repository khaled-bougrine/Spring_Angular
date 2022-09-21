import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-onetype',
  templateUrl: './onetype.component.html',
  styleUrls: ['./onetype.component.css']
})
export class OnetypeComponent implements OnInit {
// @Input() classColore:string;
 //@Input() classColore1:string;
 // @Input() classColore2:string;
    @Input() link:string;
  

	@Input()image:string;
//@Input()	class:string;
class0:string='';
	class:string='class2';
  class1:string='class5'
	//class1:string='class5';
  @Input()name:string;

  constructor() { }

  ngOnInit(): void {
   // this.class=this.classColore2;
  }
  mouseEnter(){

  //	this.class=this.classColore1;
  this.class0="class3";
  	this.class='class1';
    this.class1='class4';
  	//this.class1=this.classColore;
  }
  mouseOut(){
  //	this.class=this.classColore2;
      this.class='class2';
          this.class1='class5';


  	this.class0='';
  	  //	this.class1='class5';

  }

}
