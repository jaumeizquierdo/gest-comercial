import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringoutgoingComponent } from './storingoutgoing.component';

describe('StoringoutgoingComponent', () => {
  let component: StoringoutgoingComponent;
  let fixture: ComponentFixture<StoringoutgoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoringoutgoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringoutgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
