import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-bestprice',
  templateUrl: './bestprice.component.html',
  styleUrls: ['./bestprice.component.css']
})
export class BestpriceComponent implements OnInit {
@Input() class:string='class'
  @Input() list:any[];
d:number=0;
  f:number=6;

  constructor( ) { }

  ngOnInit(): void {
  }
    getlist(){
    	
  	return this.list.slice(this.d,this.f)
  }
  next(){
    if(this.f+5<this.list.length)
          {this.f=this.f+5;
                  this.d=this.d+5;}
        else
       {   this.f=this.list.length
               this.d=this.d+5}
  }
  previes(){

       if(this.d-5>0){
          this.d=this.d-5;
       
        this.f=this.d+5;}
        else{
          this.d=0;
        
        this.f=5;
      }
  }
    mouseEnter(){
    this.class='class1';
    
  }

}
