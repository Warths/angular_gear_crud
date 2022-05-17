import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSetComponent } from './article-set.component';

describe('ArticleSetComponent', () => {
  let component: ArticleSetComponent;
  let fixture: ComponentFixture<ArticleSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
