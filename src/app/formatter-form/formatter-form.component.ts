import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import * as _ from 'lodash';
import { Store } from '@ngxs/store';
import { FormatterActions } from '../store/formatter.actions';
import {
  FieldType,
  FormatterConfig,
  FormatterConfigRow,
  RowType,
} from '../store/formatter.model';
import { ButtonModule } from 'primeng/button';

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
    ButtonModule,
  ],
  templateUrl: './formatter-form.component.html',
  styleUrl: './formatter-form.component.scss',
})
export class FormatterFormComponent implements OnChanges {
  store = inject(Store);
  rowType = RowType;
  fieldType = FieldType;

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
  } as FormatterConfig;

  modelChanged() {
    console.log('model changed', this.formConfig);
    this.store.dispatch(
      new FormatterActions.UpdateDescription(this.formConfig)
    );
  }

  ngOnChanges() {
    console.log('changes', this.formConfig);
  }

  addSection(type: RowType, fieldType: FieldType) {
    this.formConfig.rows.push({
      type,
      isIncluded: true,
      isIncludedId: _.uniqueId('form-row-included-'),
      isEditable: true,
      content: {
        editable: true,
        fieldType,
        value: '',
      },
      id: _.uniqueId('form-row-'),
    });
  }

  removeSection(row: FormatterConfigRow) {
    _.remove(this.formConfig.rows, row);
  }
}
