import { Component } from '@angular/core';
import { NgxWatermarkOptions } from 'ngx-watermark';
import { environment } from '../environments/environment';

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
        alpha: 0.7
    };

    optionsText = this.options.text;
    optionsFont = this.options.fontFamily;

    optionsTextChange() {
        this.options = Object.assign({}, this.options, { text: this.optionsText});
    }

    optionFontChange() {
        this.options = Object.assign({}, this.options, { fontFamily: this.optionsFont});
    }
}
