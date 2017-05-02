import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isFavorite = false;

    constructor(private renderer: Renderer2) {}

    onShowBoring(element: HTMLElement) {
        // element.style.display = 'block';
        this.renderer.setStyle(element, 'display', 'block');
    }
}
