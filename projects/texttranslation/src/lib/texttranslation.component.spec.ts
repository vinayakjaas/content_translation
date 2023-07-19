import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttranslationComponent } from './texttranslation.component';

describe('TexttranslationComponent', () => {
  let component: TexttranslationComponent;
  let fixture: ComponentFixture<TexttranslationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TexttranslationComponent]
    });
    fixture = TestBed.createComponent(TexttranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
