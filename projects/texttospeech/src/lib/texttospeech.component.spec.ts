import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttospeechComponent } from './texttospeech.component';

describe('TexttospeechComponent', () => {
  let component: TexttospeechComponent;
  let fixture: ComponentFixture<TexttospeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TexttospeechComponent]
    });
    fixture = TestBed.createComponent(TexttospeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
