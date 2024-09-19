import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormatterState } from '../store/formatter.state';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-formatter-result',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ButtonModule],
  templateUrl: './formatter-result.component.html',
  styleUrl: './formatter-result.component.scss',
})
export class FormatterResultComponent implements OnInit {
  store = inject(Store);
  description$: Observable<string> = this.store.select(
    FormatterState.getResult
  );

  description: string = '';

  constructor() {}

  ngOnInit(): void {
    this.description$.subscribe((description) => {
      this.description = description;
    });
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.description);
  }
}
