import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompLoaderComponent } from './dynamic-comp-loader.component';

describe('DynamicCompLoaderComponent', () => {
  let component: DynamicCompLoaderComponent;
  let fixture: ComponentFixture<DynamicCompLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
