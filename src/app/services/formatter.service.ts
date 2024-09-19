import { Injectable } from '@angular/core';
import { FormatterConfig } from '../store/formatter.model';
import { RowType } from '../store/formatter.model';

@Injectable()
export class FormatterService {
  constructor() {}

  formatDescription(config: FormatterConfig): string {
    let description = "<div class='ocs-desc'>";
    for (const row of config.rows) {
      if (!row.isIncluded) {
        continue;
      }

      if (row.type === RowType.HEADER) {
        description += `<div class='description-header'><span class='bold'>${row.content.value}</span></div>`;
      }

      if (row.type === RowType.PARAGRAPH) {
        description += `<div class='description-paragraph'><p>${row.content.value}</p></div>`;
      }

      if (row.type === RowType.LIST) {
        description += `<div class='description-list'><ul>`;
        for (const item of row.content.value.split('\n')) {
          description += `<li>${item}</li>`;
        }
        description += '</ul></div>';
      }
    }
    description += '</div>';

    // replace "\n" with "<br>"
    description = description.replace(/\n/g, '<br>');

    // replace "\t" with ""
    description = description.replace(/\t/g, '');

    // replace "\"" with "&quot;"
    description = description.replace(/"/g, '&quot;');

    return description;
  }
}
