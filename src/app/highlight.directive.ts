import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// DOM 에 대한 내용을 처리
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) { }
    @Input() defaultColor: string; // app component 의 defaultColor 속성을 읽기위해
    @Input('appHighlight') highlightColor: string;
    
    // 이벤트 핸들링
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}