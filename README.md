# test-angular-styles

> The application shows how to style Angular app with tools available along with framework.

## Installation

```
$ npm install
```

## Usage

```
$ ng serve
```

Run the project in your browser

```
localhost:4200
```

## Adding CSS frameworks

CSS framework can be added on three ways:
* Attach link to CDN in `index.html` file
* Add directory with framework files to `assets` directory and specify the relative path in `.angular-cli.json`

**Example**
```
 "styles": [
   "assets/bootstrap/css/bootstrap.min.js",
   "styles.scss"
],
```

* Install framework via NPM and specify the path to node_modules sources in `.angular-cli.json`

**Example**
```
 "styles": [
   "../node_modules/bootstrap/dist/css/bootstrap.min.css",
   "styles.scss"
],
```

## Changing Shadow DOM emulation

**Example**
```
@Component({
    selector: 'app-author',
    templateUrl: '...',
    styles: ...,
    encapsulation: ViewEncapsulation.Emulated
})
```

**Using**
It is possible to set encapsulation view with one of the available options:
* `encapsulation: ViewEncapsulation.Emulated`
* `encapsulation: ViewEncapsulation.Native`
* `encapsulation: ViewEncapsulation.None`

## CSS Selectors

### :host
Allows to set styles for the host of the component.

### :host(condition)
Sets the styles for the particular host, specified with the condition.

**Example**
```
<app-quote class="favourite"></app-quote>
```

```
:host(.favourite) {
    border: solid 1px #ff0000;
}
```

### :host-context(condition)
Set the styles for the particular host, which is wrapped by element specified in the condition.

**Example**
```
:host-context(.boring) {
   border: solid 1px #cccccc;
}
```

```
<div class="boring">
   <app-quote></app-quote>
</div>
```

### /deep/

Apply styles not only to the elements in the template but also to child components

**Example**
```
:host-context(.boring) /deep/ h1 {
   color: #cccccc;
}
```

or alternatively

```
:host-context(.boring) >>> h1 {
   color: #cccccc;
}
```

## Angular Directives for styling

### ngClass

Conditionally applies CSS Classes to Elements.

**Using**
* `[ngClass]="{class1: condition}"`
* `[ngClass]="'class1 class2'"`
* `[ngClass]="[class1 class2]"`
* `[ngClass]="{'class1 class2': condition}"`

**Example**
```
<app-quote
   [ngClass]="{'favorite super-favorite' : isFavorite}"
</app-quote>
```

### ngStyle

Dynamically applies CSS Styles to Elements.

**Using**
* `[ngStyle]="{'background-color': '#ff0000'}"`
* `[ngStyle]="{'width.px': 200}"`
* `[ngStyle]="{'height': '400px'}"`

**Example**
```
<app-quote
    [ngStyle]="{'width.px': 400}">
</app-quote>
```

## Using the Angular Renderer

The renderer class is a build-in service which allows to manipulate DOM elements.

**Example**
```
import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: ...
    styleUrls: ...
})
export class AppComponent {
    constructor(private renderer: Renderer2) {}

    onShowBoring(element: HTMLElement) {
        this.renderer.setStyle(element, 'display', 'block');
    }
}
```

### <span style="color:#ff0000">It is not allowed to manipulate DOM elements directly!</span>

***AntiPattern***
```
import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: ...
    styleUrls: ...
})
export class AppComponent {
    constructor(private renderer: Renderer2) {}

    onShowBoring(element: HTMLElement) {
        element.style.display = 'block'; // AntiPattern!!!
    }
}
```
