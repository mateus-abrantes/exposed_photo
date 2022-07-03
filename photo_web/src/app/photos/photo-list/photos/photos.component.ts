import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'pw-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {

  @Input() photos: Photo[] = []
  rows: Photo[][] = [];

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['photos']){
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]): Photo[][] {
    const newRows: Photo[][] = [];
    for(let index = 0; index < this.photos.length; index+=3){
       newRows.push(photos.slice(index,index+3));
    }
    return newRows;
  }

}
