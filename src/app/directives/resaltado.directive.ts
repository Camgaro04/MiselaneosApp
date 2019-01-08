import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})

export class ResaltadoDirective {

  constructor(private eleRef:ElementRef) { 

  }

  @Input("appResaltado") color:string;

  @HostListener('mouseenter') mouseEnter(){
    this.resaltar(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave(){
   this.resaltar(null);
  }

  private resaltar(color:string){
    this.eleRef.nativeElement.style.backgroundColor =color;
  }

}
