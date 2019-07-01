import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersrequestComponent } from './suppliersrequest.component';

describe('SuppliersrequestComponent', () => {
  let component: SuppliersrequestComponent;
  let fixture: ComponentFixture<SuppliersrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
