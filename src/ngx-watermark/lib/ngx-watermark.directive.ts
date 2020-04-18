import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';
import { WatermarkHandler } from './watermark.handler';
import { NgxWatermarkOptions } from './ngx-watermark-options.model';

@Directive({
    selector: '[ngxWatermark]'
})
export class NgxWatermarkDirective implements OnChanges {

    private watermarkHandler: WatermarkHandler;

    constructor(private _el: ElementRef, private _renderer: Renderer2) {
        this.watermarkHandler = new WatermarkHandler(this._el, this._renderer);
    }

    @Input('ngxWatermark') options: NgxWatermarkOptions;
    
    ngOnChanges() {
        this.watermarkHandler.generateWatermark(this.options);
    }       

   
       
        

}