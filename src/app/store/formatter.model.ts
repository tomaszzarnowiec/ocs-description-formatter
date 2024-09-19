export interface FormatterStateModel {
  config: FormatterConfig | null;
  result: string;
}

export interface FormatterConfig {
  rows: FormatterConfigRow[];
}

export interface FormatterConfigRow {
  type: RowType;
  isIncluded: boolean;
  isIncludedId: string;
  isEditable: boolean;
  content: {
    editable: boolean;
    fieldType: string;
    value: string;
  };
  id: string;
}

export enum RowType {
  PARAGRAPH = 'paragraph',
  HEADER = 'header',
  LIST = 'list',
}

export enum FieldType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
}
