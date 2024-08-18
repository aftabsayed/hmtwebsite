import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WippageComponent } from './wippage.component';

describe('WippageComponent', () => {
  let component: WippageComponent;
  let fixture: ComponentFixture<WippageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WippageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WippageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
