<h1 align="center">ngx-watermark</h1>

<p align="center">
Simple watermark with multiple line of text for <a href="https://angular.io/">Angular</a>
</p>


<p align="center">
<a href="https://www.npmjs.com/package/ngx-watermark"><img src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=npm%20package&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fmadcaz%2Fngx-watermark%2Fdevelopment%2Fpackage.json&style=for-the-badge"></a>
<a href="https://github.com/MADCAZ/ngx-watermark/blob/development/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/MADCAZ/ngx-watermark?color=%23f86a08&style=for-the-badge"></a>
</p>


## Table of contents
- [Table of contents](#table-of-contents)
- [Features](#features)
- [Installation instructions](#installation-instructions)
- [Demo](#demo)
- [API](#api)

## Features
- [x] Watermark Text Multiple Line
- [x] Customize font-family with Web Safe Font
- [x] Allow to use your own web fonts
- [x] Load web fonts via `fontfaceobserver` lib


## Installation instructions
Install `ngx-watermark` from `npm`:
```bash
npm install ngx-watermark --save
```

Add needed package to NgModule imports:
```
import { NgxWatermarkModule } from 'ngx-watermark';

@NgModule({
  ...
  imports: [NgxWatermarkModule,...]
  ...
})
```

Add `ngxWatermark` to your HTML element:
```
<section class="jumbotron" [ngxWatermark]="options">
    ...
</section>
```
## Demo
[demo project](https://madcaz.github.io/ngx-watermark/)

## Options
 Option  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | string  | `ngx-watermark` | no | Your text for create watermark. Seperate line with `\n` |
| width | number  | `300` | no | Set width for watermark. |
| height | number  | `100` | no | Set height for watermark. |
| fontFamily | string  | `Arial` | no | Set font-family for text. Can set your custom web fonts. |
| fontSize | string  | `18px` | no | Set font size for text. |
| fontWeight | 'normal' or 'bold' or 'bolder' or 'lighter' or 100 or 200 or 300 or 400 or 500 or 600 or 700 or 800 or 900  | `normal` | no | Set font weight for text. |
| color | string | `#999999` | no | Set font color for text by HEX color. |
| alpha | number | `0.5` | no | Set opacity for watermark. |
| degree | number | `-45` | no | Set degree for watermark. |
| lineHeight | number | `24` | no | Set line height for text. |
| textAlign | 'start' or 'end' or 'center' or 'left' or 'right' | `center` | no | Set text align for text. |
| textBaseline | 'alphabetic' or 'top' or 'hanging' or 'middle' or 'ideographic' or 'bottom' | `middle` | no | Set text base line for text. |
