export namespace FormatterActions {
  export class UpdateDescription {
    static readonly type = '[Formatter] UpdateDescription';
    constructor(public formConfig: any) {}
  }

  export class ClearDescription {
    static readonly type = '[Formatter] ClearDescription';
    constructor() {}
  }
}
