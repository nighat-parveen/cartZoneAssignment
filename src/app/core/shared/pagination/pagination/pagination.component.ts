import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalLength;
  @Output() getpageNum = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
    //console.log(this.totalLength);
    
  }

  onPageChange = (event) => {
    //console.log(event);
    this.getpageNum.emit(event);
  }

}
