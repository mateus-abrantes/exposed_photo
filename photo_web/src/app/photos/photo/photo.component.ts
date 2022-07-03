import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() description='';
  @Input() url='';

  constructor() { }

  ngOnInit(): void {
  }

}
