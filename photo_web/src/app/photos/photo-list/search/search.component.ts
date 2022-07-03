import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'pw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping: EventEmitter<string> = new EventEmitter<string>()
  @Input() value: string = '';
  debounce: Subject<string> = new Subject();

  constructor() { }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));
  }


  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
