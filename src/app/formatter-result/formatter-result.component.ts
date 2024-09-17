import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormatterState } from '../store/formatter.state';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-formatter-result',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './formatter-result.component.html',
  styleUrl: './formatter-result.component.scss',
})
export class FormatterResultComponent {
  store = inject(Store);
  description$: Observable<string> = this.store.select(
    FormatterState.getResult
  );
}
