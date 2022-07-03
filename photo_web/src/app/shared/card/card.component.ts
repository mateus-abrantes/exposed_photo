import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() title: string = ''
  constructor() { }

  ngOnInit(): void {
  }

}