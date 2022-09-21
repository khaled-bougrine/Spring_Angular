import { Model } from '../models/Model.model';

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bestpriceitem',
  templateUrl: './bestpriceitem.component.html',
  styleUrls: ['./bestpriceitem.component.css']
})
export class BestpriceitemComponent implements OnInit {
 @Input() product :Model;
 ishere:string='class';
  constructor() { }

  ngOnInit(): void {
  }
  mouseenter(){
  	this.ishere='';

  }
    mouseout(){
  	this.ishere='class';

  }

}
