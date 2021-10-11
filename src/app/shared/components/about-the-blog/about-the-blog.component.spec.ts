import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheBlogComponent } from './about-the-blog.component';

describe('AboutTheBlogComponent', () => {
  let component: AboutTheBlogComponent;
  let fixture: ComponentFixture<AboutTheBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTheBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
