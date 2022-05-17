import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingViewComponent } from './making-view.component';

describe('MakingViewComponent', () => {
  let component: MakingViewComponent;
  let fixture: ComponentFixture<MakingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
