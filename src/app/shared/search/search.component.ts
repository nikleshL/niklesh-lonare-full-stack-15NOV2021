import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() filterOption: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * onChange
   */
  public onChange(event, type) {
    const filter = {
      value : event.target.value,
      type : type
    }
    this.filterOption.emit(filter);
  }
}
