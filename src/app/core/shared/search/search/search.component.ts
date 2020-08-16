import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name = new FormControl('');
  @Output() onChangeData = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    
    this.name.valueChanges.subscribe(data => this.onChangeData.emit(data));
  }

}
