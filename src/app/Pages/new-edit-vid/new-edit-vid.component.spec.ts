import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditVidComponent } from './new-edit-vid.component';

describe('NewEditVidComponent', () => {
  let component: NewEditVidComponent;
  let fixture: ComponentFixture<NewEditVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEditVidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEditVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
