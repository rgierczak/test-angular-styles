import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorComponent } from '../author/author.component';
import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
    let component: QuoteComponent;
    let fixture: ComponentFixture<QuoteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [
                    AuthorComponent,
                    QuoteComponent
                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
