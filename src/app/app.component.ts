import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormatterFormComponent } from './formatter-form/formatter-form.component';
import { FormatterResultComponent } from './formatter-result/formatter-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormatterFormComponent, FormatterResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ocs-description-formatter';
}
