import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringlistComponent } from './storinglist.component';

describe('StoringlistComponent', () => {
  let component: StoringlistComponent;
  let fixture: ComponentFixture<StoringlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoringlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
