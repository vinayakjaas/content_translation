import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTTANDTTSComponent } from './tttandtts.component';

describe('TTTANDTTSComponent', () => {
  let component: TTTANDTTSComponent;
  let fixture: ComponentFixture<TTTANDTTSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TTTANDTTSComponent]
    });
    fixture = TestBed.createComponent(TTTANDTTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
