import { Component, OnInit ,Input} from '@angular/core';
import {ModelService} from '../service/Model.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() imageId;
  retrieveResonse:any;
 retrievedImage:any;
  constructor(public service:ModelService) { }

  ngOnInit(): void {
  	      this.service.getImagesById(this.imageId)
    .subscribe(
        rest => {
          this.retrieveResonse = rest;
         
          this.retrievedImage ='data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        },
           (error) => {
        console.log('Uh-oh, an error----------- occurred! : ' + error);
      }
      );



  }

}
