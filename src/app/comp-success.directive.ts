import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

   // Use dependency injection to access DOM element
   constructor(private ele:ElementRef) 
   {
     //ele.nativeElement.style.background='yellow'
   }
 
   @HostListener('mouseenter') onmouseenter()
   {
     this.setcolor('green');
   }
 
   @HostListener('mouseleave') onmouseleave()
   {
     this.setcolor('black');
   }
 
   setcolor(color:string)
   {
     this.ele.nativeElement.style.color=color;
   }

}
