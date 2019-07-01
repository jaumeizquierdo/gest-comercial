import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocustomersComponent } from './tocustomers.component';

describe('TocustomersComponent', () => {
  let component: TocustomersComponent;
  let fixture: ComponentFixture<TocustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
