import { Component } from '@angular/core';
import { NgxWatermarkOptions } from 'ngx-watermark';
import { environment } from '../environments/environment';
import { ColorEvent } from 'ngx-color';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    version: string = environment.version;

    options: NgxWatermarkOptions = {
        text: 'This is NGX-WATERMARK\nSimple watermark text\nmultiple line and custom font',
        width: 350,
        height: 300,
        fontFamily: 'Kanit',
        color: '#999',
        alpha: 0.7,
        degree: -45,
        fontSize: '20px',
    };

    optionsText: string = this.options.text;
    optionsFont: string = this.options.fontFamily;
    optionsAlpha: number = this.options.alpha;
    optionsWidth: number = this.options.width;
    optionsHeight: number = this.options.height;
    optionsDegree: number = this.options.degree;
    optionsFontSize: string = this.options.fontSize;

    optionsTextChange() {
        this.updateOptions({ text: this.optionsText });
    }

    optionsFontChange() {
        this.updateOptions({ fontFamily: this.optionsFont });
    }

    colorSelect(_c: ColorEvent) {
        this.updateOptions({ color: _c.color.hex });
    }

    optionsAlphaChange() {
        this.updateOptions({ alpha: this.optionsAlpha });
    }

    optionsWidthChange() {
        this.updateOptions({ width: this.optionsWidth });
    }

    optionsHeightChange() {
        this.updateOptions({ height: this.optionsHeight });
    }

    optionsDegreeChange() {
        this.updateOptions({ degree: this.optionsDegree});
    }

    optionsFontSizeChange() {
        this.updateOptions({ fontSize: this.optionsFontSize });
    }

    private updateOptions(_obj: any) {
        this.options = Object.assign({}, this.options, _obj);
    }
}
