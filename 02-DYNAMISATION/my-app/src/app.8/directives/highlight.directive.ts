
import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[Highlight]'
})


export class HighlightDirective {

    constructor(element: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(element.nativeElement,'background','yellow');
    }

}


