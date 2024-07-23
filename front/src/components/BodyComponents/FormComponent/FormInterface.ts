export interface IFormikConstructor {
  iniValues: Object;
  valiSchema: Object;
  handelerSubmit: any;
  dataContructor: IDataConstructorInput[];
}

export interface IDataConstructorInput {
  LabelText: string;
  FieldType: string;
  FieldName: string;
  FieldPH: string;
}

export interface IButtonForm {
  name: string;
}
