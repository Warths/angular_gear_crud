import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchbarFullComponent } from './header-searchbar-full.component';

describe('HeaderSearchbarFullComponent', () => {
  let component: HeaderSearchbarFullComponent;
  let fixture: ComponentFixture<HeaderSearchbarFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSearchbarFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchbarFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
