import { Directive, ElementRef } from "@angular/core";

@Directive ({ selector: '[panel]'})

export class PanelDirective {
    constructor(private el: ElementRef) {
        console.log(el);
    }
}