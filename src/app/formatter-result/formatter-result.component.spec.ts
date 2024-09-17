import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatterResultComponent } from './formatter-result.component';

describe('FormatterResultComponent', () => {
  let component: FormatterResultComponent;
  let fixture: ComponentFixture<FormatterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatterResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
