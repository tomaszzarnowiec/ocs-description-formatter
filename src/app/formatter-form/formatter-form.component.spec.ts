import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatterFormComponent } from './formatter-form.component';

describe('FormatterFormComponent', () => {
  let component: FormatterFormComponent;
  let fixture: ComponentFixture<FormatterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
