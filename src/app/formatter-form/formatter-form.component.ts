import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import * as _ from 'lodash';

@Component({
  selector: 'app-formatter-form',
  standalone: true,
  imports: [
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    NgFor,
    NgIf,
    JsonPipe,
    CheckboxModule,
  ],
  templateUrl: './formatter-form.component.html',
  styleUrl: './formatter-form.component.scss',
})
export class FormatterFormComponent implements OnChanges {
  formConfig = {
    rows: [
      {
        type: 'header',
        isIncluded: true,
        isIncludedId: _.uniqueId('form-row-included-'),
        isEditable: true,
        content: {
          editable: true,
          fieldType: 'text',
          value: '',
        },
        id: _.uniqueId('form-row-'),
      },
      {
        type: 'paragraph',
        isIncluded: true,
        isEditable: true,
        content: {
          editable: true,
          fieldType: 'textarea',
          value: '',
        },
        id: _.uniqueId('form-row-'),
      },
    ],
  };

  modelChanged() {
    console.log('model changed', this.formConfig);
  }

  ngOnChanges() {
    console.log('changes', this.formConfig);
  }
}
