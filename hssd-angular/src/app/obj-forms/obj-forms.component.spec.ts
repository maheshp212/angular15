import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjFormsComponent } from './obj-forms.component';

describe('ObjFormsComponent', () => {
  let component: ObjFormsComponent;
  let fixture: ComponentFixture<ObjFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
