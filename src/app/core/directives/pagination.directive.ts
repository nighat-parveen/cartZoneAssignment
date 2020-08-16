import {
  Directive,
  OnChanges,
  OnInit,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: '[appPagination]',
  exportAs: "appPagination"
})
export class PaginationDirective {

  @Input() totalPge: number;
  @Input() pageNumber: number = 1;

  @Output() pageChange = new EventEmitter<number>();


  constructor(private el: ElementRef, private renderer: Renderer2) {
    // console.log(el,renderer);
  }

  ngOnInit(){
    this.currentPage(1);
  }

  // code for changes input box to move to particular page

  // @HostListener("input", ["$event.target.value"]) onInput(val) {
    
  // validation on val must be in range

  //   this.currentPage(val);
  // }


  get isFirstPage(): boolean{
    return this.pageNumber === 1;
  }

  get isLastPage(): boolean{
    return this.pageNumber === this.totalPge;
  }

  isFirst(){
    this.currentPage(1);
  }

  isLast(){
    this.currentPage(this.totalPge);
  }

 isPrevious() {
    this.currentPage(Math.max(1,this.pageNumber - 1))
  }

 isNext(){
    this.currentPage(Math.min(this.totalPge,this.pageNumber + 1))
 }

  private currentPage(val: number){
    this.pageNumber = val;
    this.setVal(this.pageNumber);
    this.pageChange.emit(this.pageNumber);

  }

  private setVal(val: number | string){
    this.renderer.setProperty(this.el.nativeElement,"value",String(val));
  }






}
