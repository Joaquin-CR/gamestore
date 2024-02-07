import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditProvComponent } from './new-edit-prov.component';

describe('NewEditProvComponent', () => {
  let component: NewEditProvComponent;
  let fixture: ComponentFixture<NewEditProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEditProvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEditProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
