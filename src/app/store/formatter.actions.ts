import { FormatterConfig } from './formatter.model';

export namespace FormatterActions {
  export class UpdateDescription {
    static readonly type = '[Formatter] UpdateDescription';
    constructor(public formConfig: FormatterConfig) {}
  }

  export class ClearDescription {
    static readonly type = '[Formatter] ClearDescription';
    constructor() {}
  }
}
